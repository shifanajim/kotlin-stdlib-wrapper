export declare namespace kotlin {
    type byte = number;
    type char = number;
    type short = number;
    type int = number;
    type long = number;
    type ubyte = number;
    type ushort = number;
    type uint = number;
    type ulong = number;
    type float = number;
    type double = number;

    type Array<T> = T[];
    type BooleanArray = boolean[];
    type ByteArray = byte[];
    type CharArray = char[];
    type ShortArray = short[];
    type IntArray = int[];
    type LongArray = long[];
    type UByteArray = ubyte[];
    type UShortArray = ushort[];
    type UIntArray = uint[];
    type ULongArray = ulong[];
    type FloatArray = float[];
    type DoubleArray = double[];

    function KotlinVersion(major: int, minor: int): KotlinVersion;
    function emptyArray<T>(): T[];

    interface Comparable<T> {
        compareTo(other: T): int;
    }

    interface Comparator<T> {
        compare(a: T, b: T): int;
    }

    class Result<T> {
        private constructor();

        readonly isFailure: boolean;
        readonly isSuccess: boolean;
        exceptionOrNull(): Throwable | null;
        getOrNull(): T | null;
        toString(): string;
    }

    class Pair<A, B> {
        constructor(first: A, second: B);

        readonly first: A;
        readonly second: B;
        toString(): string;
    }

    class Triple<A, B, C> {
        constructor(first: A, second: B, third: C);

        readonly first: A;
        readonly second: B;
        readonly third: C;
        toString(): string;
    }

    type Function<R> = () => R;

    interface Annotation {}

    interface CharSequence {
        readonly length: int;
        subSequence(startIndex: int, endIndex: int): CharSequence;
    }

    class KotlinVersion implements Comparable<KotlinVersion> {
        constructor(major: int, minor: int, patch: int);
        readonly major: int;
        readonly minor: int;
        readonly patch: int;

        compareTo(other: kotlin.KotlinVersion): kotlin.int;
    }

    abstract class Enum<E extends Enum<E>> implements Comparable<E> {
        constructor(name: string, ordinal: int);
        readonly name: string;
        readonly ordinal: int;

        compareTo(other: E): kotlin.int;
    }

    interface Lazy<T> {
        readonly value: T;
        isInitialized(): boolean;
    }

    class LazyThreadSafetyMode extends kotlin.Enum<LazyThreadSafetyMode> {
        private constructor();
        static valueOf(value: string): LazyThreadSafetyMode;
        static values(): LazyThreadSafetyMode[];
        static readonly SYNCHRONIZED: LazyThreadSafetyMode;
        static readonly PUBLICATION: LazyThreadSafetyMode;
        static readonly NONE: LazyThreadSafetyMode;
    }

    class Throwable {
        constructor(message?: string);
        constructor(cause?: Throwable);
        constructor(message?: string, cause?: Throwable);

        readonly cause: Throwable | null;

        readonly message: string | null;
    }
}

export declare namespace kotlin.collections {
    function ArrayList<T>(): MutableList<T>;
    function HashMap<K, V>(): HashMap<K, V>;
    function HashSet<T>(): HashSet<T>;
    function LinkedHashMap<K, V>(): LinkedHashMap<K, V>;
    function LinkedHashSet<T>(): LinkedHashSet<T>;
    function arrayListOf<T>(elements: T[]): ArrayList<T>;
    function emptyList<T>(): List<T>;
    function emptyMap<K, V>(): Map<K, V>;
    function emptySet<T>(): Set<T>;
    function hashMapOf<K, V>(pairs: kotlin.Pair<K, V>[]): HashMap<K, V>;
    function hashSetOf<T>(elements: T[]): HashSet<T>;
    function linkedMapOf<K, V>(pairs: kotlin.Pair<K, V>[]): LinkedHashMap<K, V>;
    function linkedSetOf<T>(elements: T[]): LinkedHashSet<T>;
    function listOf<T>(elements: T[]): List<T>;
    function listOfNotNull<T>(element: T | null): List<T>;
    function listOfNotNull<T>(elements: (T | null)[]): List<T>;
    function mapOf<K, V>(pairs: kotlin.Pair<K, V>[]): Map<K, V>;
    function mutableListOf<T>(elements: T[]): MutableList<T>;
    function mutableMapOf<K, V>(pairs: kotlin.Pair<K, V>[]): MutableMap<K, V>;
    function mutableSetOf<T>(elements: T[]): MutableSet<T>;
    function setOf<T>(elements: T[]): Set<T>;
    function setOfNotNull<T>(element: T | null): Set<T>;
    function setOfNotNull<T>(elements: [T | null]): Set<T>;

    interface Iterator<T> {
        hasNext(): boolean;
        next(): T;
    }

    interface ListIterator<T> extends Iterator<T> {
        hasPrevious(): boolean;
        nextIndex(): kotlin.int;
        previous(): T;
        previousIndex(): kotlin.int;
    }

    interface MutableIterator<T> extends Iterator<T> {
        remove(): void;
    }

    interface MutableListIterator<T> extends ListIterator<T>, MutableIterator<T> {
        add(element: T): void;
        set(element: T): void;
    }

    interface Iterable<T> {
        iterator(): Iterator<T>;
        [Symbol.iterator](): IterableIterator<T>;
    }

    interface Collection<E> extends Iterable<E> {
        readonly size: kotlin.int;
        contains(element: E): boolean;
        containsAll(elements: Collection<E>): boolean;
        isEmpty(): boolean;
        toArray(): E[];
    }

    interface List<E> extends Collection<E> {
        get(index: kotlin.int): E;
        indexOf(element: E): kotlin.int;
        lastIndexOf(element: E): kotlin.int;
        listIterator(index: kotlin.int): ListIterator<E>;
        listIterator(): ListIterator<E>;
        subList(fromIndex: kotlin.int, toIndex: kotlin.int): List<E>;
    }

    interface MutableIterable<T> extends Iterable<T> {
        iterator(): MutableIterator<T>;
    }

    interface MutableCollection<E> extends Collection<E>, MutableIterable<E> {
        add(element: E): boolean;
        addAll(elements: Collection<E>): boolean;
        clear(): void;
        remove(element: E): boolean;
        removeAll(elements: Collection<E>): boolean;
        retainAll(elements: Collection<E>): boolean;
        iterator(): MutableIterator<E>;
    }

    interface MutableList<E> extends List<E>, MutableCollection<E> {
        add(element: E): boolean;
        add(index: kotlin.int, element: E): boolean;
        addAll(elements: Collection<E>): boolean;
        addAll(index: kotlin.int, elements: E): void;
        iterator(): MutableListIterator<E>;
    }

    abstract class AbstractCollection<E> implements Collection<E> {
        private constructor();
        readonly size: kotlin.int;
        toArray(array: E[]): E[];
        toArray(): E[];
        containsAll(elements: kotlin.collections.Collection<E>): boolean;
        contains(element: E): boolean;
        isEmpty(): boolean;
        abstract iterator(): kotlin.collections.Iterator<E>;
        [Symbol.iterator](): IterableIterator<E>;
    }

    abstract class AbstractMutableCollection<E> implements AbstractCollection<E>, MutableCollection<E> {
        private constructor();
        abstract add(element: E): boolean;
        addAll(elements: kotlin.collections.Collection<E>): boolean;
        clear(): void;
        remove(element: E): boolean;
        removeAll(elements: kotlin.collections.Collection<E>): boolean;
        retainAll(elements: kotlin.collections.Collection<E>): boolean;
        containsAll(elements: kotlin.collections.Collection<E>): boolean;
        contains(element: E): boolean;
        isEmpty(): boolean;
        readonly size: kotlin.int;
        toArray(): E[];
        toArray(array: E[]): E[];
        abstract iterator(): kotlin.collections.MutableIterator<E>;
        [Symbol.iterator](): IterableIterator<E>;
    }

    abstract class AbstractMutableList<E> implements AbstractMutableCollection<E>, MutableList<E> {
        private constructor();
        abstract add(element: E): boolean;
        abstract add(index: kotlin.int, element: E): boolean;
        addAll(elements: kotlin.collections.Collection<E>): boolean;
        addAll(index: kotlin.int, elements: E): void;
        clear(): void;
        contains(element: E): boolean;
        containsAll(elements: kotlin.collections.Collection<E>): boolean;
        abstract get(index: kotlin.int): E;
        indexOf(element: E): kotlin.int;
        isEmpty(): boolean;
        iterator(): kotlin.collections.MutableListIterator<E>;
        [Symbol.iterator](): IterableIterator<E>;
        lastIndexOf(element: E): kotlin.int;
        listIterator(index: kotlin.int): kotlin.collections.ListIterator<E>;
        listIterator(): kotlin.collections.ListIterator<E>;
        readonly size: kotlin.int;
        remove(element: E): boolean;
        removeAll(elements: kotlin.collections.Collection<E>): boolean;
        retainAll(elements: kotlin.collections.Collection<E>): boolean;
        subList(fromIndex: kotlin.int, toIndex: kotlin.int): kotlin.collections.List<E>;
        toArray(array: E[]): E[];
        toArray(): E[];
    }

    interface RandomAccess {}

    class ArrayList<E> implements AbstractMutableList<E>, MutableList<E>, RandomAccess {
        private constructor();
        add(element: E): boolean;
        add(index: kotlin.int, element: E): boolean;
        addAll(elements: kotlin.collections.Collection<E>): boolean;
        addAll(index: kotlin.int, elements: E): void;
        clear(): void;
        contains(element: E): boolean;
        containsAll(elements: kotlin.collections.Collection<E>): boolean;
        get(index: kotlin.int): E;
        indexOf(element: E): kotlin.int;
        isEmpty(): boolean;
        iterator(): kotlin.collections.MutableListIterator<E>;
        [Symbol.iterator](): IterableIterator<E>;
        lastIndexOf(element: E): kotlin.int;
        listIterator(index: kotlin.int): kotlin.collections.ListIterator<E>;
        listIterator(): kotlin.collections.ListIterator<E>;
        readonly size: kotlin.int;
        remove(element: E): boolean;
        removeAll(elements: kotlin.collections.Collection<E>): boolean;
        retainAll(elements: kotlin.collections.Collection<E>): boolean;
        subList(fromIndex: kotlin.int, toIndex: kotlin.int): kotlin.collections.List<E>;
        toArray(array: E[]): E[];
        toArray(): E[];
        ensureCapacity(minCapacity: kotlin.int): void;
        removeRange(fromIndex: kotlin.int, toIndex: kotlin.int): void;
        set(index: kotlin.int, element: E): E;
        toString(): string;
        trimToSize(): void;
    }

    abstract class AbstractList<E> implements AbstractCollection<E>, List<E> {
        private constructor();
        contains(element: E): boolean;
        containsAll(elements: kotlin.collections.Collection<E>): boolean;
        abstract get(index: kotlin.int): E;
        indexOf(element: E): kotlin.int;
        isEmpty(): boolean;
        iterator(): kotlin.collections.Iterator<E>;
        [Symbol.iterator](): IterableIterator<E>;
        lastIndexOf(element: E): kotlin.int;
        listIterator(index: kotlin.int): kotlin.collections.ListIterator<E>;
        listIterator(): kotlin.collections.ListIterator<E>;
        readonly size: kotlin.int;
        subList(fromIndex: kotlin.int, toIndex: kotlin.int): kotlin.collections.List<E>;
        toArray(array: E[]): E[];
        toArray(): E[];
    }

    class ArrayDeque<E> implements AbstractMutableList<E> {
        private constructor();
        add(element: E): boolean;
        add(index: kotlin.int, element: E): boolean;
        addAll(elements: kotlin.collections.Collection<E>): boolean;
        addAll(index: kotlin.int, elements: E): void;
        clear(): void;
        contains(element: E): boolean;
        containsAll(elements: kotlin.collections.Collection<E>): boolean;
        get(index: kotlin.int): E;
        indexOf(element: E): kotlin.int;
        isEmpty(): boolean;
        iterator(): kotlin.collections.MutableListIterator<E>;
        [Symbol.iterator](): IterableIterator<E>;
        lastIndexOf(element: E): kotlin.int;
        listIterator(index: kotlin.int): kotlin.collections.ListIterator<E>;
        listIterator(): kotlin.collections.ListIterator<E>;
        readonly size: kotlin.int;
        remove(element: E): boolean;
        removeAll(elements: kotlin.collections.Collection<E>): boolean;
        retainAll(elements: kotlin.collections.Collection<E>): boolean;
        subList(fromIndex: kotlin.int, toIndex: kotlin.int): kotlin.collections.List<E>;
        toArray(array: E[]): E[];
        toArray(): E[];
        addFirst(element: E): void;
        addLast(element: E): void;
        first(): E;
        firstOrNull(): E | null;
        last(): E;
        lastOrNull(): E | null;
        removeAt(index: kotlin.int): E;
        removeFirst(): E;
        removeFirstOrNull(): E | null;
        removeLast(): E;
        removeLastOrNull(): E | null;
        set(index: kotlin.int, element: E): E;
    }

    interface Set<E> extends Collection<E> {}

    interface MutableSet<E> extends Set<E>, MutableCollection<E> {
        iterator(): MutableIterator<E>;
    }

    abstract class AbstractSet<E> implements AbstractCollection<E>, Set<E> {
        private constructor();
        contains(element: E): boolean;
        containsAll(elements: kotlin.collections.Collection<E>): boolean;
        isEmpty(): boolean;
        abstract iterator(): kotlin.collections.Iterator<E>;
        [Symbol.iterator](): IterableIterator<E>;
        readonly size: kotlin.int;
        toArray(array: E[]): E[];
        toArray(): E[];
    }

    abstract class AbstractMutableSet<E> implements AbstractMutableCollection<E>, MutableSet<E> {
        private constructor();
        abstract add(element: E): boolean;
        addAll(elements: kotlin.collections.Collection<E>): boolean;
        clear(): void;
        contains(element: E): boolean;
        containsAll(elements: kotlin.collections.Collection<E>): boolean;
        isEmpty(): boolean;
        abstract iterator(): kotlin.collections.MutableIterator<E>;
        [Symbol.iterator](): IterableIterator<E>;
        readonly size: kotlin.int;
        remove(element: E): boolean;
        removeAll(elements: kotlin.collections.Collection<E>): boolean;
        retainAll(elements: kotlin.collections.Collection<E>): boolean;
        toArray(array: E[]): E[];
        toArray(): E[];
    }

    class HashSet<E> implements AbstractMutableSet<E>, MutableSet<E> {
        private constructor();
        add(element: E): boolean;
        addAll(elements: kotlin.collections.Collection<E>): boolean;
        clear(): void;
        contains(element: E): boolean;
        containsAll(elements: kotlin.collections.Collection<E>): boolean;
        isEmpty(): boolean;
        iterator(): kotlin.collections.MutableIterator<E>;
        [Symbol.iterator](): IterableIterator<E>;
        readonly size: kotlin.int;
        remove(element: E): boolean;
        removeAll(elements: kotlin.collections.Collection<E>): boolean;
        retainAll(elements: kotlin.collections.Collection<E>): boolean;
        toArray(array: E[]): E[];
        toArray(): E[];
    }

    class LinkedHashSet<E> implements HashSet<E>, MutableSet<E> {
        private constructor();
        add(element: E): boolean;
        addAll(elements: kotlin.collections.Collection<E>): boolean;
        clear(): void;
        contains(element: E): boolean;
        containsAll(elements: kotlin.collections.Collection<E>): boolean;
        isEmpty(): boolean;
        iterator(): kotlin.collections.MutableIterator<E>;
        [Symbol.iterator](): IterableIterator<E>;
        readonly size: kotlin.int;
        remove(element: E): boolean;
        removeAll(elements: kotlin.collections.Collection<E>): boolean;
        retainAll(elements: kotlin.collections.Collection<E>): boolean;
        toArray(array: E[]): E[];
        toArray(): E[];
    }

    namespace Map {
        interface Entry<K, V> {
            readonly key: K;
            readonly value: V;
        }
    }

    namespace MutableMap {
        interface MutableEntry<K, V> extends Map.Entry<K, V> {
            setValue(newValue: V): V;
        }
    }

    interface Map<K, V> {
        readonly entries: Set<Map.Entry<K, V>>;
        readonly keys: Set<K>;
        readonly size: kotlin.int;
        readonly values: Collection<V>;

        containsKey(key: K): boolean;
        containsValue(value: V): boolean;
        get(key: K): V | null;
        getOrDefault(key: K, defaultValue: V): V;
        isEmpty(): boolean;
    }

    interface MutableMap<K, V> extends Map<K, V> {
        readonly entries: MutableSet<MutableMap.MutableEntry<K, V>>;
        readonly keys: MutableSet<K>;
        readonly values: MutableCollection<V>;

        clear(): void;
        put(key: K, value: V): V | null;
        putAll(from: Map<K, V>): void;
        remove(key: K): V | null;
        remove(key: K, value: V): boolean;
    }

    abstract class AbstractMap<K, V> implements Map<K, V> {
        private constructor();
        readonly entries: kotlin.collections.Set<kotlin.collections.Map.Entry<K, V>>;
        readonly keys: kotlin.collections.Set<K>;
        readonly size: kotlin.int;
        readonly values: kotlin.collections.Collection<V>;

        containsKey(key: K): boolean;
        containsValue(value: V): boolean;
        getOrDefault(key: K, defaultValue: V): V;
        get(key: K): V | null;
        isEmpty(): boolean;
    }

    abstract class AbstractMutableMap<K, V> implements AbstractMap<K, V>, MutableMap<K, V> {
        private constructor();
        readonly entries: kotlin.collections.MutableSet<kotlin.collections.MutableMap.MutableEntry<K, V>>;
        readonly keys: kotlin.collections.MutableSet<K>;
        readonly size: kotlin.int;
        readonly values: kotlin.collections.MutableCollection<V>;

        clear(): void;
        containsKey(key: K): boolean;
        containsValue(value: V): boolean;
        get(key: K): V | null;
        getOrDefault(key: K, defaultValue: V): V;
        isEmpty(): boolean;
        abstract put(key: K, value: V): V | null;
        putAll(from: kotlin.collections.Map<K, V>): void;
        remove(key: K): V | null;
        remove(key: K, value: V): boolean;
    }

    class HashMap<K, V> implements AbstractMutableMap<K, V>, MutableMap<K, V> {
        private constructor();
        readonly entries: kotlin.collections.MutableSet<kotlin.collections.MutableMap.MutableEntry<K, V>>;
        readonly keys: kotlin.collections.MutableSet<K>;
        readonly size: kotlin.int;
        readonly values: kotlin.collections.MutableCollection<V>;

        clear(): void;
        containsKey(key: K): boolean;
        containsValue(value: V): boolean;
        get(key: K): V | null;
        getOrDefault(key: K, defaultValue: V): V;
        isEmpty(): boolean;
        put(key: K, value: V): V | null;
        putAll(from: kotlin.collections.Map<K, V>): void;
        remove(key: K): V | null;
        remove(key: K, value: V): boolean;
    }

    class LinkedHashMap<K, V> implements HashMap<K, V>, MutableMap<K, V> {
        private constructor();
        readonly entries: kotlin.collections.MutableSet<kotlin.collections.MutableMap.MutableEntry<K, V>>;
        readonly keys: kotlin.collections.MutableSet<K>;
        readonly size: kotlin.int;
        readonly values: kotlin.collections.MutableCollection<V>;

        clear(): void;
        containsKey(key: K): boolean;
        containsValue(value: V): boolean;
        get(key: K): V | null;
        getOrDefault(key: K, defaultValue: V): V;
        isEmpty(): boolean;
        put(key: K, value: V): V | null;
        putAll(from: kotlin.collections.Map<K, V>): void;
        remove(key: K): V | null;
        remove(key: K, value: V): boolean;
    }

    interface Grouping<T, K> {
        keyOf(element: T): K;
        sourceIterator(): Iterator<T>;
    }

    abstract class AbstractIterator<T> implements Iterator<T> {
        private constructor();
        hasNext(): boolean;
        abstract computeNext(): void;
        next(): T;
        done(): void;
        setNext(value: T): void;
    }

    abstract class BooleanIterator implements Iterator<boolean> {
        private constructor();
        abstract hasNext(): boolean;
        next(): boolean;
    }

    abstract class ByteIterator implements Iterator<kotlin.byte> {
        private constructor();
        abstract hasNext(): boolean;
        next(): kotlin.byte;
    }

    abstract class CharIterator implements Iterator<kotlin.char> {
        private constructor();
        abstract hasNext(): boolean;
        next(): kotlin.char;
    }

    abstract class DoubleIterator implements Iterator<kotlin.double> {
        private constructor();
        abstract hasNext(): boolean;
        next(): kotlin.double;
    }

    abstract class FloatIterator implements Iterator<kotlin.float> {
        private constructor();
        abstract hasNext(): boolean;
        next(): kotlin.float;
    }

    abstract class IntIterator implements Iterator<kotlin.int> {
        private constructor();
        abstract hasNext(): boolean;
        next(): kotlin.int;
    }

    abstract class LongIterator implements Iterator<kotlin.long> {
        private constructor();
        abstract hasNext(): boolean;
        next(): kotlin.long;
    }

    abstract class ShortIterator implements Iterator<kotlin.short> {
        private constructor();
        abstract hasNext(): boolean;
        next(): kotlin.short;
    }

    abstract class UByteIterator implements Iterator<kotlin.ubyte> {
        private constructor();
        abstract hasNext(): boolean;
        next(): kotlin.ubyte;
    }

    abstract class UIntIterator implements Iterator<kotlin.uint> {
        private constructor();
        abstract hasNext(): boolean;
        next(): kotlin.uint;
    }

    abstract class ULongIterator implements Iterator<kotlin.ulong> {
        private constructor();
        abstract hasNext(): boolean;
        next(): kotlin.ulong;
    }

    abstract class UShortIterator implements Iterator<kotlin.ushort> {
        private constructor();
        abstract hasNext(): boolean;
        next(): kotlin.ushort;
    }
}

export declare namespace kotlin.sequences {
    function generateSequence<T>(nextFunction: () => T | null): Sequence<T>;
    function generateSequence<T>(seed: T | null, nextFunction: (arg: T) => T | null): Sequence<T>;
    function generateSequence<T>(seedFunction: () => T | null, nextFunction: (arg: T) => T | null): Sequence<T>;
    function emptySequence<T>(): Sequence<T>;
    function sequenceOf<T>(elements: T[]): Sequence<T>;

    interface Sequence<T> {
        iterator(): kotlin.collections.Iterator<T>;
    }

    abstract class SequenceScope<T> {
        private constructor();
        abstract yield(value: T, continuation: kotlin.coroutines.Continuation<T>): void;
        abstract yieldAll(iterator: Iterator<T>, continuation: kotlin.coroutines.Continuation<T>): void;
        abstract yieldAll(
            elements: kotlin.collections.Iterable<T>,
            continuation: kotlin.coroutines.Continuation<T>,
        ): void;
        abstract yieldAll(sequence: Sequence<T>, continuation: kotlin.coroutines.Continuation<T>): void;
    }
}

export declare namespace kotlin.reflect {
    interface KCallable<R> {
        readonly name: string;
    }

    interface KProperty<V> extends KCallable<V> {}

    interface KProperty0<V> extends KProperty<V> {
        get(): V;
    }

    interface KProperty1<T, V> extends KProperty<V> {
        get(receiver: T): V;
    }

    interface KProperty2<D, E, V> extends KProperty<V> {
        get(receiver1: D, receiver2: D): V;
    }

    interface KMutableProperty<V> extends KProperty<V> {}

    interface KMutableProperty0<V> extends KProperty0<V>, KMutableProperty<V> {
        set(value: V): void;
    }

    interface KMutableProperty1<T, V> extends KProperty1<T, V>, KMutableProperty<V> {
        set(receiver: T, value: V): void;
    }

    interface KMutableProperty2<D, E, V> extends KProperty2<D, E, V>, KMutableProperty<V> {
        set(receiver1: D, receiver2: D, value: V): void;
    }

    interface KFunction<R> extends KCallable<R>, kotlin.Function<R> {}

    interface KClassifier {}

    interface KClass<T extends object> extends KClassifier {
        readonly qualifiedName: string | null;
        readonly simpleName: string | null;
    }

    interface KType {
        readonly arguments: kotlin.collections.List<KTypeProjection>;
        readonly classifier: KClassifier | null;
        readonly isMarkedNullable: boolean;
    }

    interface KTypeParameter extends KClassifier {
        isReified: boolean;
        name: string;
        upperBounds: kotlin.collections.List<KType>;
        variance: KVariance;
    }

    class KTypeProjection {
        private constructor(variance?: KVariance, type?: KType);
        readonly type: KType | null;
        readonly variance: KVariance | null;
    }

    class KVariance extends kotlin.Enum<KVariance> {
        private constructor();
        static valueOf(value: string): KVariance;
        static values(): KVariance[];
        static readonly IN: KVariance;
        static readonly INVARIANT: KVariance;
        static readonly OUT: KVariance;
    }
}

export declare namespace kotlin.properties {
    interface ReadOnlyProperty<T, V> {
        getValue(thisRef: any, property: kotlin.reflect.KProperty<any>): V;
    }

    interface ReadWriteProperty<T, V> extends ReadOnlyProperty<T, V> {
        setValue(thisRef: any, property: kotlin.reflect.KProperty<any>, value: V): V;
    }

    abstract class ObservableProperty<V> implements ReadWriteProperty<any, V> {
        constructor(initialValue: V);

        afterChange(property: kotlin.reflect.KProperty<any>, oldValue: V, newValue: V): void;
        beforeChange(property: kotlin.reflect.KProperty<any>, oldValue: V, newValue: V): boolean;
        getValue(thisRef: any, property: kotlin.reflect.KProperty<any>): V;
        setValue(thisRef: any, property: kotlin.reflect.KProperty<any>, value: V): V;
    }
}

export declare namespace kotlin.coroutines {
    namespace CoroutineContext {
        interface Element {
            readonly key: Key<Element>;
        }

        interface Key<E extends Element> {}
    }

    interface CoroutineContext {
        fold<R>(initial: R, operation: (arg0: R, arg1: CoroutineContext.Element) => R): R;
        get<E extends CoroutineContext.Element>(key: CoroutineContext.Key<E>): E | null;
        minusKey_yeqjby(key: CoroutineContext.Key<CoroutineContext.Element>): CoroutineContext;
        plus(context: CoroutineContext): CoroutineContext;
    }

    abstract class AbstractCoroutineContextElement implements CoroutineContext.Element {
        constructor(key: CoroutineContext.Key<any>);
        readonly key: any;
    }

    interface Continuation<T> {
        readonly context: CoroutineContext;
        resumeWith(result: kotlin.Result<T>): void;
    }
}

export declare namespace kotlin.random {
    abstract class Random {
        private constructor();
        nextBoolean(): boolean;
        abstract nextBits(bitCount: kotlin.int): kotlin.int;
        nextBytes(size: kotlin.int): kotlin.ByteArray;
        nextBytes(array: kotlin.ByteArray): kotlin.ByteArray;
        nextBytes(array: kotlin.ByteArray, fromIndex: kotlin.int, toIndex: kotlin.int): kotlin.ByteArray;
        nextDouble(): kotlin.double;
        nextDouble(until: kotlin.double): kotlin.double;
        nextDouble(from: kotlin.double, until: kotlin.double): kotlin.double;
        nextFloat(): kotlin.float;
        nextInt(): kotlin.int;
        nextInt(until: kotlin.int): kotlin.int;
        nextInt(from: kotlin.int, until: kotlin.int): kotlin.int;
        nextLong(): kotlin.long;
        nextLong(until: kotlin.long): kotlin.long;
        nextLong(from: kotlin.long, until: kotlin.long): kotlin.long;
    }
}

export declare namespace kotlin.ranges {
    class CharProgression implements kotlin.collections.Iterable<kotlin.char> {
        protected constructor();
        readonly first: kotlin.char;
        readonly last: kotlin.char;
        readonly step: kotlin.int;
        iterator(): kotlin.collections.CharIterator;
        [Symbol.iterator](): IterableIterator<kotlin.char>;
        isEmpty(): boolean;
    }

    class IntProgression implements kotlin.collections.Iterable<kotlin.int> {
        protected constructor();
        readonly first: kotlin.int;
        readonly last: kotlin.int;
        readonly step: kotlin.int;
        iterator(): kotlin.collections.IntIterator;
        [Symbol.iterator](): IterableIterator<kotlin.int>;
        isEmpty(): boolean;
    }

    class LongProgression implements kotlin.collections.Iterable<kotlin.long> {
        protected constructor();
        readonly first: kotlin.long;
        readonly last: kotlin.long;
        readonly step: kotlin.int;
        iterator(): kotlin.collections.LongIterator;
        [Symbol.iterator](): IterableIterator<kotlin.long>;
        isEmpty(): boolean;
    }

    class UIntProgression implements kotlin.collections.Iterable<kotlin.uint> {
        protected constructor();
        readonly first: kotlin.uint;
        readonly last: kotlin.uint;
        readonly step: kotlin.int;
        iterator(): kotlin.collections.UIntIterator;
        [Symbol.iterator](): IterableIterator<kotlin.uint>;
        isEmpty(): boolean;
    }

    class ULongProgression implements kotlin.collections.Iterable<kotlin.ulong> {
        protected constructor();
        readonly first: kotlin.ulong;
        readonly last: kotlin.ulong;
        readonly step: kotlin.int;
        iterator(): kotlin.collections.ULongIterator;
        [Symbol.iterator](): IterableIterator<kotlin.ulong>;
        isEmpty(): boolean;
    }

    interface ClosedRange<T> {
        readonly endInclusive: T;
        readonly start: T;
        contains(value: T): boolean;
        isEmpty(): boolean;
    }

    class CharRange extends CharProgression implements ClosedRange<kotlin.char> {
        constructor(start: kotlin.char, endInclusive: kotlin.char);
        readonly endInclusive: kotlin.char;
        readonly start: kotlin.char;
        contains(value: kotlin.char): boolean;
    }

    class IntRange extends IntProgression implements ClosedRange<kotlin.int> {
        constructor(start: kotlin.int, endInclusive: kotlin.int);
        readonly endInclusive: kotlin.int;
        readonly start: kotlin.int;
        contains(value: kotlin.int): boolean;
    }

    class LongRange extends LongProgression implements ClosedRange<kotlin.long> {
        constructor(start: kotlin.long, endInclusive: kotlin.long);
        readonly endInclusive: kotlin.long;
        readonly start: kotlin.long;
        contains(value: kotlin.long): boolean;
    }

    class UIntRange extends UIntProgression implements ClosedRange<kotlin.uint> {
        constructor(start: kotlin.uint, endInclusive: kotlin.uint);
        readonly endInclusive: kotlin.uint;
        readonly start: kotlin.uint;
        contains(value: kotlin.uint): boolean;
    }

    class ULongRange extends ULongProgression implements ClosedRange<kotlin.ulong> {
        constructor(start: kotlin.ulong, endInclusive: kotlin.ulong);
        readonly endInclusive: kotlin.ulong;
        readonly start: kotlin.ulong;
        contains(value: kotlin.ulong): boolean;
    }

    interface ClosedFloatingPointRange<T extends kotlin.Comparable<T>> extends ClosedRange<T> {
        lessThanOrEquals(a: T, b: T): boolean;
    }
}
