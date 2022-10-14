function getDelegatorName(delegateName: string): string {
    const endIndex = delegateName.indexOf('_');
    if (endIndex < 0) return delegateName;
    return delegateName.substring(0, endIndex);
}

interface ClassOrInstance {
    prototype?: any;
}

function getPrototype(classOrInstance: ClassOrInstance): any {
    return classOrInstance.prototype || Object.getPrototypeOf(classOrInstance);
}

function getPrototypeName(prototype: any): string {
    return prototype.name || '<unknown>';
}

function getDelegate(prototype: any, delegateName: string): Function {
    const delegate = prototype[delegateName];
    if (typeof delegate !== 'function') {
        throw new Error('Function ' + delegateName + ' does not exist in prototype ' + getPrototypeName(prototype));
    }
    return delegate;
}

function setDelegator(prototype: any, delegatorName: string | symbol, delegator: Function) {
    prototype[delegatorName] = delegator;
}

function setDelegatorIfUndefined(prototype: any, delegatorName: string, delegator: Function) {
    if (prototype.hasOwnProperty(delegatorName)) {
        throw new Error('Function ' + delegatorName + ' is ambiguous in prototype ' + getPrototypeName(prototype));
    }
    setDelegator(prototype, delegatorName, delegator);
}

function getDelegateByArgumentCount(
    prototype: any,
    delegatorName: string,
    delegates: (Function | undefined)[],
    argumentCount: number,
): Function {
    const delegate = delegates[argumentCount];
    if (delegate === undefined) {
        throw new Error(
            'Function ' +
                delegatorName +
                ' cannot be called with ' +
                arguments.length +
                ' arguments in prototype ' +
                getPrototypeName(prototype),
        );
    }
    return delegate;
}

function patchDelegate(prototype: any, delegatorName: string, delegateName: string) {
    const delegate = getDelegate(prototype, delegateName);
    setDelegatorIfUndefined(prototype, delegatorName, function () {
        // @ts-ignore
        return delegate.apply(this, arguments);
    });
}

function patchDispatchByArgumentCount(prototype: any, delegatorName: string, delegateNames: (string | undefined)[]) {
    const delegates = delegateNames.map((delegateName) =>
        delegateName ? getDelegate(prototype, delegateName) : undefined,
    );

    setDelegator(prototype, delegatorName, function () {
        const delegate = getDelegateByArgumentCount(prototype, delegatorName, delegates, arguments.length);
        // @ts-ignore
        return delegate.apply(this, arguments);
    });
}

function patchIteratorAndToArray(prototype: any) {
    setDelegator(prototype, Symbol.iterator, function () {
        // @ts-ignore
        const kotlinIterator = this.iterator();
        return {
            next() {
                const done = !kotlinIterator.hasNext();
                return done
                    ? {
                          done: true,
                      }
                    : {
                          done: false,
                          value: kotlinIterator.next(),
                      };
            },
        };
    });

    if (typeof prototype.toArray !== 'function') {
        setDelegator(prototype, 'toArray', function () {
            const array = [];
            // @ts-ignore
            for (const element of this) {
                array.push(element);
            }
            return array;
        });
    }
}

export type PatchDelegates = [prototype: any, delegateNames: string[]];

export function patchDelegates(...patches: PatchDelegates[]) {
    for (const patch of patches) {
        for (const delegateName of patch[1]) {
            const delegatorName = getDelegatorName(delegateName);
            patchDelegate(getPrototype(patch[0]), delegatorName, delegateName);
        }
    }
}

export function patchStaticDelegates(...patches: PatchDelegates[]) {
    for (const patch of patches) {
        for (const delegateName of patch[1]) {
            const delegatorName = getDelegatorName(delegateName);
            patchDelegate(patch[0], delegatorName, delegateName);
        }
    }
}

export type PatchDispatches = [prototype: any, delegatorName: string, delegateNames: (string | undefined)[]];

export function patchDispatchesByArgumentCount(...patches: PatchDispatches[]) {
    for (const patch of patches) {
        patchDispatchByArgumentCount(getPrototype(patch[0]), patch[1], patch[2]);
    }
}

export function patchIteratorsAndToArray(...patches: any[]) {
    for (const patch of patches) {
        patchIteratorAndToArray(getPrototype(patch));
    }
}
