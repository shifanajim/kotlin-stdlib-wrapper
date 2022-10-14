import * as m from 'kotlin';
import {
    patchDelegates,
    patchDispatchesByArgumentCount,
    patchIteratorsAndToArray,
    patchStaticDelegates,
} from './patcher';
import './stdlib';

export const kotlin = m.kotlin;

const k0: any = kotlin;

const AbstractList = new (k0.collections.AbstractList as any)();
const AbstractList$SubList = AbstractList.subList_vux9f0$();
const AbstractMutableList$SubList = new (k0.collections.ArrayList as any)([]).subList_vux9f0$();
const AbstractMutableList$ListIteratorImpl = new (k0.collections.ArrayList as any)([]).listIterator_za3lpa$();
const AbstractMutableMap$AbstractEntrySet = new k0.collections.LinkedHashMap().entries;
const AbstractMutableMap$SimpleEntry = (k0.collections as any)
    .mapOf_x2b85n$(new (k0.Pair as any)(1, 2))
    .entries.iterator()
    .next();
const ArrayAsCollection = (k0.collections as any).asCollection_vj43ah$();
const EmptyMap = (k0.collections as any).emptyMap_q3lmfv$();
const EmptySequence = (k0.collections as any).asSequence_355ntz$([]);
const MapWithDefaultImpl = (k0.collections as any).withDefault_jgsead$();
const MutableMapWithDefaultImpl = (k0.collections as any).withDefault_btzz9u$();
const HashMap$EntrySet = new k0.collections.HashMap().entries;
const LinkedHashMap$EntrySet = new k0.collections.LinkedHashMap().entries;

const InternalStringMap$newMapEntry$ObjectLiteral = (() => {
    const _ = new (k0.collections as any).InternalStringMap();
    _.put_xwzc9p$('', '');
    return _.iterator().next();
})();

patchIteratorsAndToArray(
    AbstractList,
    k0.collections.AbstractCollection,
    k0.collections.AbstractMutableCollection,
    k0.collections.AbstractMutableList,
    k0.collections.ArrayList,
    k0.collections.EmptyList,
    k0.collections.AbstractList,
    k0.collections.ArrayDeque,
    k0.collections.AbstractSet,
    k0.collections.AbstractMutableSet,
    k0.collections.HashSet,
    k0.collections.LinkedHashSet,
    k0.ranges.CharProgression,
    k0.ranges.IntProgression,
    k0.ranges.LongProgression,
    k0.ranges.UIntProgression,
    k0.ranges.ULongProgression,
);

patchDispatchesByArgumentCount(
    [AbstractList, 'listIterator', ['listIterator', 'listIterator_za3lpa$']],
    [k0.collections.AbstractCollection, 'toArray', ['toArray', 'toArray_ro6dgy$']],
    [k0.collections.AbstractMutableList, 'listIterator', ['listIterator', 'listIterator_za3lpa$']],
    [k0.collections.ArrayDeque, 'testToArray', ['testToArray_8be2vx$', 'testToArray_2r4q7p$']],
    [k0.collections.ArrayDeque, 'toArray', ['toArray', 'toArray_ro6dgy$']],
    [k0.collections.ArrayDeque, 'add', [undefined, 'add_11rb$', 'add_wxm5ur$']],
    [k0.collections.ArrayDeque, 'addAll', [undefined, 'addAll_brywnq$', 'addAll_u57x28$']],
    [k0.collections.ArrayList, 'toArray', ['toArray', 'toArray_ro6dgy$']],
    [k0.collections.ArrayList, 'add', [undefined, 'add_11rb$', 'add_wxm5ur$']],
    [k0.collections.ArrayList, 'addAll', [undefined, 'addAll_brywnq$', 'addAll_u57x28$']],
    [k0.collections.EmptyList, 'listIterator', ['listIterator', 'listIterator_za3lpa$']],
    [k0.io.BaseOutput, 'println', ['println', 'println_s8jyv4$']],
    [k0.io.OutputToConsoleLog, 'println', ['println', 'println_s8jyv4$']],
    [k0.KotlinVersion, 'isAtLeast', [undefined, undefined, 'isAtLeast_vux9f0$', 'isAtLeast_qt1dr2$']],
    [k0.random.Random, 'nextDouble', [undefined, 'nextDouble_14dthe$', 'nextDouble_lu1900$']],
    [k0.random.Random, 'nextInt', [undefined, 'nextInt_za3lpa$', 'nextInt_vux9f0$']],
    [k0.random.Random, 'nextLong', [undefined, 'nextLong_s8cxhz$', 'nextLong_3pjtqy$']],
    [k0.text.StringBuilder, 'indexOf', [undefined, 'indexOf_61zpoe$', 'indexOf_bm4lxs$']],
    [k0.text.StringBuilder, 'lastIndexOf', [undefined, 'lastIndexOf_61zpoe$', 'lastIndexOf_bm4lxs$']],
    [k0.text.StringBuilder, 'substring', [undefined, 'substring_za3lpa$', 'substring_vux9f0$']],
    [k0.time.Duration, 'toString', ['toString', 'toString_mha1pa$']],
    [k0.random.Random.Default, 'nextDouble', [undefined, 'nextDouble_14dthe$', 'nextDouble_lu1900$']],
    [k0.random.Random.Default, 'nextInt', [undefined, 'nextInt_za3lpa$', 'nextInt_vux9f0$']],
    [k0.random.Random.Default, 'nextLong', [undefined, 'nextLong_s8cxhz$', 'nextLong_3pjtqy$']],
);

patchDelegates(
    [k0.collections.AbstractCollection, ['contains_11rb$', 'containsAll_brywnq$']],
    [k0.collections.AbstractIterator, ['setNext_11rb$']],
    [
        k0.collections.AbstractList.Companion,
        [
            'checkBoundsIndexes_cub51b$',
            'checkElementIndex_6xvm5r$',
            'checkPositionIndex_6xvm5r$',
            'checkRangeIndexes_cub51b$',
            'orderedEquals_e92ka7$',
            'orderedHashCode_nykoif$',
        ],
    ],
    [k0.collections.AbstractMap.Companion, ['entryEquals_js7fox$', 'entryHashCode_9fthdn$', 'entryToString_9fthdn$']],
    [k0.collections.AbstractMap, ['containsEntry_8hxqw4$', 'containsKey_11rb$', 'containsValue_11rc$', 'get_11rb$']],
    [
        k0.collections.AbstractMutableCollection,
        ['addAll_brywnq$', 'remove_11rb$', 'removeAll_brywnq$', 'retainAll_brywnq$'],
    ],
    [
        k0.collections.AbstractMutableList,
        [
            'add_11rb$',
            'addAll_u57x28$',
            'contains_11rb$',
            'indexOf_11rb$',
            'lastIndexOf_11rb$',
            'removeAll_brywnq$',
            'removeRange_vux9f0$',
            'retainAll_brywnq$',
            'subList_vux9f0$',
        ],
    ],
    [k0.collections.AbstractMutableMap, ['putAll_a2k3zr$', 'remove_11rb$']],
    [k0.collections.AbstractSet.Companion, ['setEquals_y8f7en$', 'unorderedHashCode_nykoif$']],
    [k0.collections.ArrayDeque.Companion, ['newCapacity_6xvm5r$']],
    [
        k0.collections.ArrayDeque,
        [
            'addFirst_11rb$',
            'addLast_11rb$',
            'contains_11rb$',
            'get_za3lpa$',
            'indexOf_11rb$',
            'internalStructure_zgjqsc$',
            'lastIndexOf_11rb$',
            'remove_11rb$',
            'removeAll_brywnq$',
            'removeAt_za3lpa$',
            'retainAll_brywnq$',
            'set_wxm5ur$',
        ],
    ],
    [
        k0.collections.ArrayList,
        [
            'ensureCapacity_za3lpa$',
            'get_za3lpa$',
            'indexOf_11rb$',
            'lastIndexOf_11rb$',
            'remove_11rb$',
            'removeAt_za3lpa$',
            'removeRange_vux9f0$',
            'set_wxm5ur$',
        ],
    ],
    [
        k0.collections.EmptyList,
        [
            'contains_11rb$',
            'containsAll_brywnq$',
            'get_za3lpa$',
            'indexOf_11rb$',
            'lastIndexOf_11rb$',
            'subList_vux9f0$',
        ],
    ],
    [k0.collections.EmptySet, ['contains_11rb$', 'containsAll_brywnq$']],
    [k0.collections.HashMap, ['containsKey_11rb$', 'containsValue_11rc$', 'get_11rb$', 'put_xwzc9p$', 'remove_11rb$']],
    [k0.collections.HashSet, ['add_11rb$', 'contains_11rb$', 'remove_11rb$']],
    [k0.collections.IndexedValue, ['copy_wxm5ur$']],
    [k0.collections.InternalHashCodeMap, ['contains_11rb$', 'get_11rb$', 'put_xwzc9p$', 'remove_11rb$']],
    [k0.collections.InternalStringMap, ['contains_11rb$', 'get_11rb$', 'put_xwzc9p$', 'remove_11rb$']],
    [
        k0.collections.LinkedHashMap,
        ['containsKey_11rb$', 'containsValue_11rc$', 'get_11rb$', 'put_xwzc9p$', 'remove_11rb$'],
    ],
    [k0.collections.Map, ['getOrDefault_xwzc9p$']],
    [k0.collections.MovingSubList, ['get_za3lpa$', 'move_vux9f0$']],
    [k0.collections.MutableMap, ['remove_xwzc9p$']],
    [k0.contracts.ContractBuilder, ['callsInPlace_yys88$']],
    [k0.coroutines.AbstractCoroutineContextKey, ['isSubKey_i2ksv9$', 'tryCast_m1180o$']],
    [k0.coroutines.CombinedContext, ['fold_3cc69b$', 'get_j3r2sn$', 'minusKey_yeqjby$']],
    [
        k0.coroutines.ContinuationInterceptor,
        ['get_j3r2sn$', 'minusKey_yeqjby$', 'releaseInterceptedContinuation_k98bjh$'],
    ],
    [k0.coroutines.CoroutineContext, ['plus_1fupul$']],
    [k0.coroutines.CoroutineImpl, ['resumeWith_tl1gpc$']],
    [k0.DeepRecursiveScope, ['invoke_baqje6$']],
    [k0.Enum, ['compareTo_11rb$']],
    [k0.io.BufferedOutput, ['print_s8jyv4$']],
    [k0.io.BufferedOutputToConsoleLog, ['print_s8jyv4$']],
    [k0.io.NodeJsOutput, ['print_s8jyv4$']],
    [k0.KotlinVersion, ['compareTo_11rb$']],
    [k0.Pair, ['copy_xwzc9p$']],
    [
        k0.properties.ObservableProperty,
        ['afterChange_jxtfl0$', 'beforeChange_jxtfl0$', 'getValue_lrcp0p$', 'setValue_9rddgb$'],
    ],
    [k0.properties.PropertyDelegateProvider, ['provideDelegate_lrcp0p$']],
    [k0.properties.ReadOnlyProperty, ['getValue_lrcp0p$']],
    [k0.random.XorWowRandom, ['nextBits_za3lpa$']],
    [k0.ranges.CharRange, ['contains_mef7kx$']],
    [k0.ranges.ClosedFloatingPointRange, ['contains_mef7kx$']],
    [k0.ranges.IntRange, ['contains_mef7kx$']],
    [k0.ranges.LongRange, ['contains_mef7kx$']],
    [k0.ranges.UIntRange, ['contains_mef7kx$']],
    [k0.ranges.CharProgression.Companion, ['fromClosedRange_ayra44$']],
    [k0.ranges.ClosedRange, ['contains_mef7kx$']],
    [k0.ranges.IntProgression.Companion, ['fromClosedRange_qt1dr2$']],
    [k0.ranges.LongProgression.Companion, ['fromClosedRange_b9bd0d$']],
    [k0.ranges.UIntProgression.Companion, ['fromClosedRange_fjk8us$']],
    [k0.ranges.ULongProgression.Companion, ['fromClosedRange_15zasp$']],
    [k0.reflect.KTypeProjection.Companion, ['contravariant_saj79j$', 'covariant_saj79j$', 'invariant_saj79j$']],
    [k0.reflect.KTypeProjection, ['copy_wulwk3$']],
    [k0.sequences.DropSequence, ['drop_za3lpa$', 'take_za3lpa$']],
    [k0.sequences.SubSequence, ['drop_za3lpa$', 'take_za3lpa$']],
    [k0.sequences.TakeSequence, ['drop_za3lpa$', 'take_za3lpa$']],
    [k0.sequences.TransformingSequence, ['flatten_1tglza$']],
    [k0.text.CharCategory.Companion, ['valueOf_kcn2v3$']],
    [k0.text.CharCategory, ['contains_s8itvh$']],
    [k0.text.MatchGroup, ['copy_61zpoe$']],
    [k0.text.Regex.Companion, ['escape_61zpoe$', 'escapeReplacement_61zpoe$', 'fromLiteral_61zpoe$']],
    [
        k0.text.Regex,
        [
            'containsMatchIn_6bul2c$',
            'find_905azu$',
            'findAll_905azu$',
            'matchAt_905azu$',
            'matchEntire_6bul2c$',
            'matches_6bul2c$',
            'matchesAt_905azu$',
            'replace_x2uqeu$',
            'replaceFirst_x2uqeu$',
            'split_905azu$',
            'splitToSequence_905azu$',
        ],
    ],
    [
        k0.text.StringBuilder,
        [
            'deleteAt_za3lpa$',
            'deleteRange_vux9f0$',
            'ensureCapacity_za3lpa$',
            'set_6t1mh3$',
            'setLength_za3lpa$',
            'setRange_98i29q$',
            'subSequence_vux9f0$',
            'toCharArray_pqkatk$',
        ],
    ],
    [
        k0.time.Duration.Companion,
        [
            'convert_d8pp1e$',
            'parse_61zpoe$',
            'parseIsoString_61zpoe$',
            'parseIsoStringOrNull_61zpoe$',
            'parseOrNull_61zpoe$',
        ],
    ],
    [
        k0.time.Duration,
        ['compareTo_11rb$', 'minus_cgako$', 'plus_cgako$', 'toDouble_p6uejw$', 'toInt_p6uejw$', 'toLong_p6uejw$'],
    ],
    [k0.time.TestTimeSource, ['plusAssign_cgako$']],
    [k0.time.TimedValue, ['copy_v4727h$']],
    [k0.time.TimeMark, ['minus_cgako$', 'plus_cgako$']],
    [k0.Triple, ['copy_1llc0w$']],
    [k0.UByteArray, ['contains_11rb$', 'containsAll_brywnq$', 'get_za3lpa$', 'set_2c6cbe$']],
    [k0.UIntArray, ['contains_11rb$', 'containsAll_brywnq$', 'get_za3lpa$', 'set_6sqrdv$']],
    [k0.ULongArray, ['contains_11rb$', 'containsAll_brywnq$', 'get_za3lpa$', 'set_2ccimm$']],
    [k0.UShortArray, ['contains_11rb$', 'containsAll_brywnq$', 'get_za3lpa$', 'set_1pe3u2$']],
    [k0.random.Random.Default, ['nextBits_za3lpa$']],

    [AbstractList, ['indexOf_11rb$', 'lastIndexOf_11rb$', 'subList_vux9f0$']],
    [AbstractList$SubList, ['get_za3lpa$']],
    [AbstractMutableList$SubList, ['add_wxm5ur$', 'get_za3lpa$', 'removeAt_za3lpa$', 'set_wxm5ur$']],
    [AbstractMutableList$ListIteratorImpl, ['add_11rb$', 'set_11rb$']],
    [AbstractMutableMap$AbstractEntrySet, ['contains_11rb$', 'remove_11rb$']],
    [AbstractMutableMap$SimpleEntry, ['setValue_11rc$']],
    [ArrayAsCollection, ['contains_11rb$', 'containsAll_brywnq$']],
    [EmptyMap, ['containsKey_11rb$', 'containsValue_11rc$', 'get_11rb$']],
    [EmptySequence, ['drop_za3lpa$', 'take_za3lpa$']],
    [MapWithDefaultImpl, ['containsKey_11rb$', 'containsValue_11rc$', 'get_11rb$', 'getOrImplicitDefault_11rb$']],
    [
        MutableMapWithDefaultImpl,
        [
            'containsKey_11rb$',
            'containsValue_11rc$',
            'get_11rb$',
            'getOrImplicitDefault_11rb$',
            'put_xwzc9p$',
            'putAll_a2k3zr$',
            'remove_11rb$',
        ],
    ],
    [HashMap$EntrySet, ['add_11rb$', 'containsEntry_kw6fkd$', 'removeEntry_kw6fkd$']],
    [LinkedHashMap$EntrySet, ['add_11rb$', 'containsEntry_kw6fkd$', 'removeEntry_kw6fkd$']],
    [
        InternalStringMap$newMapEntry$ObjectLiteral,
        ['setValue_11rc$'],

        // TODO: patch functions delegates below
        //
        // [LinkedHashMap$ChainEntry, ["setValue_11rc$"]],
        // [EqualityComparator$HashCode, ["equals_oaftn8$", "getHashCode_s8jyv4$"]],
        // [CompletedContinuation, ["resumeWith_tl1gpc$"]],
        // [Continuation$ObjectLiteral_0, ["resumeWith_tl1gpc$"]],
        // [Continuation$ObjectLiteral, ["resumeWith_tl1gpc$"]],
        // [CoroutineContext$Element, ["fold_3cc69b$", "get_j3r2sn$", "minusKey_yeqjby$"]],
        // [EmptyCoroutineContext, ["fold_3cc69b$", "get_j3r2sn$", "minusKey_yeqjby$", "plus_1fupul$"]],
        // [SafeContinuation, ["resumeWith_tl1gpc$"]],
        // [ClosedFloatRange, ["contains_mef7kx$", "lessThanOrEquals_n65qkk$"]],
        // [ULongRange_0, ["contains_mef7kx$"]],
        // [ClosedDoubleRange, ["contains_mef7kx$", "lessThanOrEquals_n65qkk$"]],
        // [AbstractDoubleTimeSource$DoubleTimeMark, ["plus_cgako$"]],
        // [AbstractLongTimeSource$LongTimeMark, ["plus_cgako$"]],
        // [BoxedChar, ["compareTo_11rb$"]],
        // [Delegates$observable$ObjectLiteral, ["afterChange_jxtfl0$"]],
        // [Delegates$vetoable$ObjectLiteral, ["beforeChange_jxtfl0$"]],
        // [NotNullVar, ["getValue_lrcp0p$", "setValue_9rddgb$"]],
        // [KTypeParameterImpl, ["copy_picmsx$"]],
        // [ErrorKClass, ["isInstance_s8jyv4$"]],
        // [ExceptionTraceBuilder, ["buildFor_tcv7n7$"]],
        // [groupingBy$ObjectLiteral, ["keyOf_11rb$"]]
    ],
);

// TODO: patch function delegates under ALTERNATIVE name below, because the are disambiguos
//
// Duration.prototype.div_14dthe$ = function (scale) {
// Duration.prototype.div_cgako$ = function (other) {
// Duration.prototype.div_za3lpa$ = function (scale) {
//
// Duration.prototype.times_14dthe$ = function (scale) {
// Duration.prototype.times_za3lpa$ = function (scale) {
//
// Duration$Companion.prototype.days_14dthe$ = function (value) {
// Duration$Companion.prototype.days_s8cxhz$ = function (value) {
// Duration$Companion.prototype.days_za3lpa$ = function (value) {
// Duration$Companion.prototype.hours_14dthe$ = function (value) {
// Duration$Companion.prototype.hours_s8cxhz$ = function (value) {
// Duration$Companion.prototype.hours_za3lpa$ = function (value) {
// Duration$Companion.prototype.microseconds_14dthe$ = function (value) {
// Duration$Companion.prototype.microseconds_s8cxhz$ = function (value) {
// Duration$Companion.prototype.microseconds_za3lpa$ = function (value) {
// Duration$Companion.prototype.milliseconds_14dthe$ = function (value) {
// Duration$Companion.prototype.milliseconds_s8cxhz$ = function (value) {
// Duration$Companion.prototype.milliseconds_za3lpa$ = function (value) {
// Duration$Companion.prototype.minutes_14dthe$ = function (value) {
// Duration$Companion.prototype.minutes_s8cxhz$ = function (value) {
// Duration$Companion.prototype.minutes_za3lpa$ = function (value) {
// Duration$Companion.prototype.nanoseconds_14dthe$ = function (value) {
// Duration$Companion.prototype.nanoseconds_s8cxhz$ = function (value) {
// Duration$Companion.prototype.nanoseconds_za3lpa$ = function (value) {
// Duration$Companion.prototype.seconds_14dthe$ = function (value) {
// Duration$Companion.prototype.seconds_s8cxhz$ = function (value) {
// Duration$Companion.prototype.seconds_za3lpa$ = function (value) {
//
// Random.prototype.nextBytes_fqrh44$ = function (array) {
// Random.prototype.nextBytes_mj6st8$ = function (array, fromIndex, toIndex, callback$default) {
// Random.prototype.nextBytes_za3lpa$ = function (size) {
//
// Random$Default.prototype.nextBytes_fqrh44$ = function (array) {
// Random$Default.prototype.nextBytes_za3lpa$ = function (size) {
//
// SequenceScope.prototype.yieldAll_p1ys8y$ = function (elements, continuation) {
// SequenceScope.prototype.yieldAll_swo9gw$ = function (sequence, continuation) {
//
// StringBuilder.prototype.append_4hbowm$ = function (value) {
// StringBuilder.prototype.append_61zpoe$ = function (value) {
// StringBuilder.prototype.append_6taknv$ = function (value) {
// StringBuilder.prototype.append_ezbsdh$ = function (value, startIndex, endIndex) {
// StringBuilder.prototype.append_gw00v9$ = function (value) {
// StringBuilder.prototype.append_pdl1vj$ = function (value) {
// StringBuilder.prototype.append_s8itvh$ = function (value) {
// StringBuilder.prototype.append_s8jyv4$ = function (value) {
// StringBuilder.prototype.appendRange_3peag4$ = function (value, startIndex, endIndex) {
// StringBuilder.prototype.appendRange_8chfmy$ = function (value, startIndex, endIndex) {
//
// StringBuilder.prototype.insert_19mbxw$ = function (index, value) {
// StringBuilder.prototype.insert_1u9bqd$ = function (index, value) {
// StringBuilder.prototype.insert_6t1mh3$ = function (index, value) {
// StringBuilder.prototype.insert_6t2rgq$ = function (index, value) {
// StringBuilder.prototype.insert_7u455s$ = function (index, value) {
// StringBuilder.prototype.insert_fzusl$ = function (index, value) {
// StringBuilder.prototype.insert_vqvrqt$ = function (index, value) {
// StringBuilder.prototype.insertRange_ar8yzk$ = function (index, value, startIndex, endIndex) {
// StringBuilder.prototype.insertRange_mnv9ne$ = function (index, value, startIndex, endIndex) {

patchStaticDelegates([
    kotlin,
    [
        // "KotlinVersion_init_vux9f0$",
        'emptyArray_287e2$',
    ],
]);

patchStaticDelegates([
    kotlin.collections,
    [
        // "ArrayList_init_287e2$",
        // "HashMap_init_q3lmfv$",
        // "HashSet_init_287e2$",
        // "LinkedHashMap_init_q3lmfv$",
        // "LinkedHashSet_init_287e2$",
        'arrayListOf_i5x0yv$',
        'emptyList_287e2$',
        'emptyMap_q3lmfv$',
        'emptySet_287e2$',
        'hashMapOf_qfcya0$',
        'hashSetOf_i5x0yv$',
        'linkedMapOf_qfcya0$',
        'linkedSetOf_i5x0yv$',
        'listOf_i5x0yv$',
        'mapOf_qfcya0$',
        'mutableListOf_i5x0yv$',
        'mutableMapOf_qfcya0$',
        'mutableSetOf_i5x0yv$',
        'setOf_i5x0yv$',
    ],
]);

patchStaticDelegates([kotlin.sequences, ['emptySequence_287e2$', 'sequenceOf_i5x0yv$']]);

/*
export declare namespace stdlib.collections {

    #function listOfNotNull_issdgt$<T>(element: T | null): List<T>;
    #function listOfNotNull_jurz7g$<T>(elements: (T | null)[]): List<T>;

    #function setOfNotNull_issdgt$<T>(element: T | null): Set<T>;
    #function setOfNotNull_jurz7g$<T>(elements: [T | null]): Set<T>;

export declare namespace stdlib.sequences {
    #function generateSequence_9ce4rd$<T>(nextFunction: () => T | null): Sequence<T>;
    #function generateSequence_gexuht$<T>(seed: T | null, nextFunction: (arg: T) => T | null): Sequence<T>;
    #function generateSequence_c6s9hp$<T>(seedFunction: () => T | null, nextFunction: (arg: T) => T | null): Sequence<T>;

}
*/
