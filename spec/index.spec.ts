import {kotlin} from "kotlin";


describe('Test Suite', () => {
    const tests: [string, Function][] = [
        [
            'kotlin.collections.AbstractCollection.prototype.contains',
            kotlin.collections.AbstractCollection.prototype.contains,
        ],
        [
            'kotlin.collections.AbstractCollection.prototype.containsAll',
            kotlin.collections.AbstractCollection.prototype.containsAll,
        ],
        [
            'kotlin.collections.AbstractCollection.prototype.isEmpty',
            kotlin.collections.AbstractCollection.prototype.isEmpty,
        ],
        [
            'kotlin.collections.AbstractCollection.prototype.toArray',
            kotlin.collections.AbstractCollection.prototype.toArray,
        ],
        ['kotlin.collections.AbstractCollection', kotlin.collections.AbstractCollection],
        ['kotlin.collections.AbstractIterator.prototype.done', kotlin.collections.AbstractIterator.prototype.done],
        [
            'kotlin.collections.AbstractIterator.prototype.hasNext',
            kotlin.collections.AbstractIterator.prototype.hasNext,
        ],
        ['kotlin.collections.AbstractIterator.prototype.next', kotlin.collections.AbstractIterator.prototype.next],
        [
            'kotlin.collections.AbstractIterator.prototype.setNext',
            kotlin.collections.AbstractIterator.prototype.setNext,
        ],
        ['kotlin.collections.AbstractIterator', kotlin.collections.AbstractIterator],
        ['kotlin.collections.AbstractList.prototype.contains', kotlin.collections.AbstractList.prototype.contains],
        [
            'kotlin.collections.AbstractList.prototype.containsAll',
            kotlin.collections.AbstractList.prototype.containsAll,
        ],
        ['kotlin.collections.AbstractList.prototype.indexOf', kotlin.collections.AbstractList.prototype.indexOf],
        ['kotlin.collections.AbstractList.prototype.isEmpty', kotlin.collections.AbstractList.prototype.isEmpty],
        ['kotlin.collections.AbstractList.prototype.iterator', kotlin.collections.AbstractList.prototype.iterator],
        [
            'kotlin.collections.AbstractList.prototype.lastIndexOf',
            kotlin.collections.AbstractList.prototype.lastIndexOf,
        ],
        [
            'kotlin.collections.AbstractList.prototype.listIterator',
            kotlin.collections.AbstractList.prototype.listIterator,
        ],
        ['kotlin.collections.AbstractList.prototype.subList', kotlin.collections.AbstractList.prototype.subList],
        ['kotlin.collections.AbstractList.prototype.toArray', kotlin.collections.AbstractList.prototype.toArray],
        ['kotlin.collections.AbstractList.prototype.toArray', kotlin.collections.AbstractList.prototype.toArray],
        ['kotlin.collections.AbstractList', kotlin.collections.AbstractList],
        ['kotlin.collections.AbstractMap.prototype.containsKey', kotlin.collections.AbstractMap.prototype.containsKey],
        [
            'kotlin.collections.AbstractMap.prototype.containsValue',
            kotlin.collections.AbstractMap.prototype.containsValue,
        ],
        ['kotlin.collections.AbstractMap.prototype.get', kotlin.collections.AbstractMap.prototype.get],
        // TODO ['kotlin.collections.AbstractMap.prototype.getOrDefault',kotlin.collections.AbstractMap.prototype.getOrDefault],
        ['kotlin.collections.AbstractMap.prototype.isEmpty', kotlin.collections.AbstractMap.prototype.isEmpty],
        ['kotlin.collections.AbstractMap', kotlin.collections.AbstractMap],
        [
            'kotlin.collections.AbstractMutableCollection.prototype.addAll',
            kotlin.collections.AbstractMutableCollection.prototype.addAll,
        ],
        [
            'kotlin.collections.AbstractMutableCollection.prototype.clear',
            kotlin.collections.AbstractMutableCollection.prototype.clear,
        ],
        [
            'kotlin.collections.AbstractMutableCollection.prototype.contains',
            kotlin.collections.AbstractMutableCollection.prototype.contains,
        ],
        [
            'kotlin.collections.AbstractMutableCollection.prototype.containsAll',
            kotlin.collections.AbstractMutableCollection.prototype.containsAll,
        ],
        [
            'kotlin.collections.AbstractMutableCollection.prototype.isEmpty',
            kotlin.collections.AbstractMutableCollection.prototype.isEmpty,
        ],
        [
            'kotlin.collections.AbstractMutableCollection.prototype.remove',
            kotlin.collections.AbstractMutableCollection.prototype.remove,
        ],
        [
            'kotlin.collections.AbstractMutableCollection.prototype.removeAll',
            kotlin.collections.AbstractMutableCollection.prototype.removeAll,
        ],
        [
            'kotlin.collections.AbstractMutableCollection.prototype.retainAll',
            kotlin.collections.AbstractMutableCollection.prototype.retainAll,
        ],
        [
            'kotlin.collections.AbstractMutableCollection.prototype.toArray',
            kotlin.collections.AbstractMutableCollection.prototype.toArray,
        ],
        ['kotlin.collections.AbstractMutableCollection', kotlin.collections.AbstractMutableCollection],
        ['kotlin.collections.AbstractMutableList.prototype.add', kotlin.collections.AbstractMutableList.prototype.add],
        [
            'kotlin.collections.AbstractMutableList.prototype.addAll',
            kotlin.collections.AbstractMutableList.prototype.addAll,
        ],
        [
            'kotlin.collections.AbstractMutableList.prototype.clear',
            kotlin.collections.AbstractMutableList.prototype.clear,
        ],
        [
            'kotlin.collections.AbstractMutableList.prototype.contains',
            kotlin.collections.AbstractMutableList.prototype.contains,
        ],
        [
            'kotlin.collections.AbstractMutableList.prototype.containsAll',
            kotlin.collections.AbstractMutableList.prototype.containsAll,
        ],
        [
            'kotlin.collections.AbstractMutableList.prototype.indexOf',
            kotlin.collections.AbstractMutableList.prototype.indexOf,
        ],
        [
            'kotlin.collections.AbstractMutableList.prototype.isEmpty',
            kotlin.collections.AbstractMutableList.prototype.isEmpty,
        ],
        [
            'kotlin.collections.AbstractMutableList.prototype.iterator',
            kotlin.collections.AbstractMutableList.prototype.iterator,
        ],
        [
            'kotlin.collections.AbstractMutableList.prototype.lastIndexOf',
            kotlin.collections.AbstractMutableList.prototype.lastIndexOf,
        ],
        [
            'kotlin.collections.AbstractMutableList.prototype.listIterator',
            kotlin.collections.AbstractMutableList.prototype.listIterator,
        ],
        [
            'kotlin.collections.AbstractMutableList.prototype.remove',
            kotlin.collections.AbstractMutableList.prototype.remove,
        ],
        [
            'kotlin.collections.AbstractMutableList.prototype.removeAll',
            kotlin.collections.AbstractMutableList.prototype.removeAll,
        ],
        [
            'kotlin.collections.AbstractMutableList.prototype.retainAll',
            kotlin.collections.AbstractMutableList.prototype.retainAll,
        ],
        [
            'kotlin.collections.AbstractMutableList.prototype.subList',
            kotlin.collections.AbstractMutableList.prototype.subList,
        ],
        [
            'kotlin.collections.AbstractMutableList.prototype.toArray',
            kotlin.collections.AbstractMutableList.prototype.toArray,
        ],
        ['kotlin.collections.AbstractMutableList', kotlin.collections.AbstractMutableList],
        [
            'kotlin.collections.AbstractMutableMap.prototype.clear',
            kotlin.collections.AbstractMutableMap.prototype.clear,
        ],
        [
            'kotlin.collections.AbstractMutableMap.prototype.containsKey',
            kotlin.collections.AbstractMutableMap.prototype.containsKey,
        ],
        [
            'kotlin.collections.AbstractMutableMap.prototype.containsValue',
            kotlin.collections.AbstractMutableMap.prototype.containsValue,
        ],
        ['kotlin.collections.AbstractMutableMap.prototype.get', kotlin.collections.AbstractMutableMap.prototype.get],
        // TODO ['kotlin.collections.AbstractMutableMap.prototype.getOrDefault',kotlin.collections.AbstractMutableMap.prototype.getOrDefault],
        [
            'kotlin.collections.AbstractMutableMap.prototype.isEmpty',
            kotlin.collections.AbstractMutableMap.prototype.isEmpty,
        ],
        [
            'kotlin.collections.AbstractMutableMap.prototype.putAll',
            kotlin.collections.AbstractMutableMap.prototype.putAll,
        ],
        [
            'kotlin.collections.AbstractMutableMap.prototype.remove',
            kotlin.collections.AbstractMutableMap.prototype.remove,
        ],
        ['kotlin.collections.AbstractMutableMap', kotlin.collections.AbstractMutableMap],
        [
            'kotlin.collections.AbstractMutableSet.prototype.addAll',
            kotlin.collections.AbstractMutableSet.prototype.addAll,
        ],
        [
            'kotlin.collections.AbstractMutableSet.prototype.clear',
            kotlin.collections.AbstractMutableSet.prototype.clear,
        ],
        [
            'kotlin.collections.AbstractMutableSet.prototype.contains',
            kotlin.collections.AbstractMutableSet.prototype.contains,
        ],
        [
            'kotlin.collections.AbstractMutableSet.prototype.containsAll',
            kotlin.collections.AbstractMutableSet.prototype.containsAll,
        ],
        [
            'kotlin.collections.AbstractMutableSet.prototype.isEmpty',
            kotlin.collections.AbstractMutableSet.prototype.isEmpty,
        ],
        [
            'kotlin.collections.AbstractMutableSet.prototype.remove',
            kotlin.collections.AbstractMutableSet.prototype.remove,
        ],
        [
            'kotlin.collections.AbstractMutableSet.prototype.removeAll',
            kotlin.collections.AbstractMutableSet.prototype.removeAll,
        ],
        [
            'kotlin.collections.AbstractMutableSet.prototype.retainAll',
            kotlin.collections.AbstractMutableSet.prototype.retainAll,
        ],
        [
            'kotlin.collections.AbstractMutableSet.prototype.toArray',
            kotlin.collections.AbstractMutableSet.prototype.toArray,
        ],
        ['kotlin.collections.AbstractMutableSet', kotlin.collections.AbstractMutableSet],
        ['kotlin.collections.AbstractSet.prototype.contains', kotlin.collections.AbstractSet.prototype.contains],
        ['kotlin.collections.AbstractSet.prototype.containsAll', kotlin.collections.AbstractSet.prototype.containsAll],
        ['kotlin.collections.AbstractSet.prototype.isEmpty', kotlin.collections.AbstractSet.prototype.isEmpty],
        ['kotlin.collections.AbstractSet.prototype.toArray', kotlin.collections.AbstractSet.prototype.toArray],
        ['kotlin.collections.AbstractSet.prototype.toArray', kotlin.collections.AbstractSet.prototype.toArray],
        ['kotlin.collections.AbstractSet', kotlin.collections.AbstractSet],
        ['kotlin.collections.ArrayDeque.prototype.add', kotlin.collections.ArrayDeque.prototype.add],
        ['kotlin.collections.ArrayDeque.prototype.addAll', kotlin.collections.ArrayDeque.prototype.addAll],
        ['kotlin.collections.ArrayDeque.prototype.addFirst', kotlin.collections.ArrayDeque.prototype.addFirst],
        ['kotlin.collections.ArrayDeque.prototype.addLast', kotlin.collections.ArrayDeque.prototype.addLast],
        ['kotlin.collections.ArrayDeque.prototype.clear', kotlin.collections.ArrayDeque.prototype.clear],
        ['kotlin.collections.ArrayDeque.prototype.contains', kotlin.collections.ArrayDeque.prototype.contains],
        ['kotlin.collections.ArrayDeque.prototype.containsAll', kotlin.collections.ArrayDeque.prototype.containsAll],
        ['kotlin.collections.ArrayDeque.prototype.first', kotlin.collections.ArrayDeque.prototype.first],
        ['kotlin.collections.ArrayDeque.prototype.firstOrNull', kotlin.collections.ArrayDeque.prototype.firstOrNull],
        ['kotlin.collections.ArrayDeque.prototype.get', kotlin.collections.ArrayDeque.prototype.get],
        ['kotlin.collections.ArrayDeque.prototype.indexOf', kotlin.collections.ArrayDeque.prototype.indexOf],
        ['kotlin.collections.ArrayDeque.prototype.isEmpty', kotlin.collections.ArrayDeque.prototype.isEmpty],
        ['kotlin.collections.ArrayDeque.prototype.iterator', kotlin.collections.ArrayDeque.prototype.iterator],
        ['kotlin.collections.ArrayDeque.prototype.last', kotlin.collections.ArrayDeque.prototype.last],
        ['kotlin.collections.ArrayDeque.prototype.lastIndexOf', kotlin.collections.ArrayDeque.prototype.lastIndexOf],
        ['kotlin.collections.ArrayDeque.prototype.lastOrNull', kotlin.collections.ArrayDeque.prototype.lastOrNull],
        ['kotlin.collections.ArrayDeque.prototype.listIterator', kotlin.collections.ArrayDeque.prototype.listIterator],
        ['kotlin.collections.ArrayDeque.prototype.listIterator', kotlin.collections.ArrayDeque.prototype.listIterator],
        ['kotlin.collections.ArrayDeque.prototype.remove', kotlin.collections.ArrayDeque.prototype.remove],
        ['kotlin.collections.ArrayDeque.prototype.removeAll', kotlin.collections.ArrayDeque.prototype.removeAll],
        ['kotlin.collections.ArrayDeque.prototype.removeAt', kotlin.collections.ArrayDeque.prototype.removeAt],
        ['kotlin.collections.ArrayDeque.prototype.removeFirst', kotlin.collections.ArrayDeque.prototype.removeFirst],
        [
            'kotlin.collections.ArrayDeque.prototype.removeFirstOrNull',
            kotlin.collections.ArrayDeque.prototype.removeFirstOrNull,
        ],
        ['kotlin.collections.ArrayDeque.prototype.removeLast', kotlin.collections.ArrayDeque.prototype.removeLast],
        [
            'kotlin.collections.ArrayDeque.prototype.removeLastOrNull',
            kotlin.collections.ArrayDeque.prototype.removeLastOrNull,
        ],
        ['kotlin.collections.ArrayDeque.prototype.retainAll', kotlin.collections.ArrayDeque.prototype.retainAll],
        ['kotlin.collections.ArrayDeque.prototype.set', kotlin.collections.ArrayDeque.prototype.set],
        ['kotlin.collections.ArrayDeque.prototype.subList', kotlin.collections.ArrayDeque.prototype.subList],
        ['kotlin.collections.ArrayDeque.prototype.toArray', kotlin.collections.ArrayDeque.prototype.toArray],
        ['kotlin.collections.ArrayDeque.prototype.toArray', kotlin.collections.ArrayDeque.prototype.toArray],
        ['kotlin.collections.ArrayDeque', kotlin.collections.ArrayDeque],
        ['kotlin.collections.ArrayList.prototype.add', kotlin.collections.ArrayList.prototype.add],
        ['kotlin.collections.ArrayList.prototype.addAll', kotlin.collections.ArrayList.prototype.addAll],
        ['kotlin.collections.ArrayList.prototype.clear', kotlin.collections.ArrayList.prototype.clear],
        ['kotlin.collections.ArrayList.prototype.contains', kotlin.collections.ArrayList.prototype.contains],
        ['kotlin.collections.ArrayList.prototype.containsAll', kotlin.collections.ArrayList.prototype.containsAll],
        [
            'kotlin.collections.ArrayList.prototype.ensureCapacity',
            kotlin.collections.ArrayList.prototype.ensureCapacity,
        ],
        ['kotlin.collections.ArrayList.prototype.get', kotlin.collections.ArrayList.prototype.get],
        ['kotlin.collections.ArrayList.prototype.indexOf', kotlin.collections.ArrayList.prototype.indexOf],
        ['kotlin.collections.ArrayList.prototype.isEmpty', kotlin.collections.ArrayList.prototype.isEmpty],
        ['kotlin.collections.ArrayList.prototype.iterator', kotlin.collections.ArrayList.prototype.iterator],
        ['kotlin.collections.ArrayList.prototype.lastIndexOf', kotlin.collections.ArrayList.prototype.lastIndexOf],
        ['kotlin.collections.ArrayList.prototype.listIterator', kotlin.collections.ArrayList.prototype.listIterator],
        ['kotlin.collections.ArrayList.prototype.listIterator', kotlin.collections.ArrayList.prototype.listIterator],
        ['kotlin.collections.ArrayList.prototype.remove', kotlin.collections.ArrayList.prototype.remove],
        ['kotlin.collections.ArrayList.prototype.removeAll', kotlin.collections.ArrayList.prototype.removeAll],
        ['kotlin.collections.ArrayList.prototype.removeRange', kotlin.collections.ArrayList.prototype.removeRange],
        ['kotlin.collections.ArrayList.prototype.retainAll', kotlin.collections.ArrayList.prototype.retainAll],
        ['kotlin.collections.ArrayList.prototype.set', kotlin.collections.ArrayList.prototype.set],
        ['kotlin.collections.ArrayList.prototype.subList', kotlin.collections.ArrayList.prototype.subList],
        ['kotlin.collections.ArrayList.prototype.toArray', kotlin.collections.ArrayList.prototype.toArray],
        ['kotlin.collections.ArrayList.prototype.toArray', kotlin.collections.ArrayList.prototype.toArray],
        ['kotlin.collections.ArrayList.prototype.toString', kotlin.collections.ArrayList.prototype.toString],
        ['kotlin.collections.ArrayList.prototype.trimToSize', kotlin.collections.ArrayList.prototype.trimToSize],
        ['kotlin.collections.ArrayList', kotlin.collections.ArrayList],
        ['kotlin.collections.arrayListOf', kotlin.collections.arrayListOf],
        ['kotlin.collections.BooleanIterator.prototype.next', kotlin.collections.BooleanIterator.prototype.next],
        ['kotlin.collections.BooleanIterator', kotlin.collections.BooleanIterator],
        ['kotlin.collections.ByteIterator.prototype.next', kotlin.collections.ByteIterator.prototype.next],
        ['kotlin.collections.ByteIterator', kotlin.collections.ByteIterator],
        ['kotlin.collections.CharIterator.prototype.next', kotlin.collections.CharIterator.prototype.next],
        ['kotlin.collections.CharIterator', kotlin.collections.CharIterator],
        ['kotlin.collections.DoubleIterator.prototype.next', kotlin.collections.DoubleIterator.prototype.next],
        ['kotlin.collections.DoubleIterator', kotlin.collections.DoubleIterator],
        ['kotlin.collections.emptyList', kotlin.collections.emptyList],
        ['kotlin.collections.emptyMap', kotlin.collections.emptyMap],
        ['kotlin.collections.emptySet', kotlin.collections.emptySet],
        ['kotlin.collections.FloatIterator.prototype.next', kotlin.collections.FloatIterator.prototype.next],
        ['kotlin.collections.FloatIterator', kotlin.collections.FloatIterator],
        ['kotlin.collections.HashMap.prototype.clear', kotlin.collections.HashMap.prototype.clear],
        ['kotlin.collections.HashMap.prototype.containsKey', kotlin.collections.HashMap.prototype.containsKey],
        ['kotlin.collections.HashMap.prototype.containsValue', kotlin.collections.HashMap.prototype.containsValue],
        ['kotlin.collections.HashMap.prototype.get', kotlin.collections.HashMap.prototype.get],
        // TODO ['kotlin.collections.HashMap.prototype.getOrDefault',kotlin.collections.HashMap.prototype.getOrDefault],
        ['kotlin.collections.HashMap.prototype.isEmpty', kotlin.collections.HashMap.prototype.isEmpty],
        ['kotlin.collections.HashMap.prototype.put', kotlin.collections.HashMap.prototype.put],
        ['kotlin.collections.HashMap.prototype.putAll', kotlin.collections.HashMap.prototype.putAll],
        ['kotlin.collections.HashMap.prototype.remove', kotlin.collections.HashMap.prototype.remove],
        ['kotlin.collections.HashMap', kotlin.collections.HashMap],
        ['kotlin.collections.hashMapOf', kotlin.collections.hashMapOf],
        ['kotlin.collections.HashSet.prototype.add', kotlin.collections.HashSet.prototype.add],
        ['kotlin.collections.HashSet.prototype.addAll', kotlin.collections.HashSet.prototype.addAll],
        ['kotlin.collections.HashSet.prototype.clear', kotlin.collections.HashSet.prototype.clear],
        ['kotlin.collections.HashSet.prototype.contains', kotlin.collections.HashSet.prototype.contains],
        ['kotlin.collections.HashSet.prototype.containsAll', kotlin.collections.HashSet.prototype.containsAll],
        ['kotlin.collections.HashSet.prototype.isEmpty', kotlin.collections.HashSet.prototype.isEmpty],
        ['kotlin.collections.HashSet.prototype.iterator', kotlin.collections.HashSet.prototype.iterator],
        ['kotlin.collections.HashSet.prototype.remove', kotlin.collections.HashSet.prototype.remove],
        ['kotlin.collections.HashSet.prototype.removeAll', kotlin.collections.HashSet.prototype.removeAll],
        ['kotlin.collections.HashSet.prototype.retainAll', kotlin.collections.HashSet.prototype.retainAll],
        ['kotlin.collections.HashSet.prototype.toArray', kotlin.collections.HashSet.prototype.toArray],
        ['kotlin.collections.HashSet', kotlin.collections.HashSet],
        ['kotlin.collections.hashSetOf', kotlin.collections.hashSetOf],
        ['kotlin.collections.IntIterator.prototype.next', kotlin.collections.IntIterator.prototype.next],
        ['kotlin.collections.IntIterator', kotlin.collections.IntIterator],
        ['kotlin.collections.LinkedHashMap.prototype.clear', kotlin.collections.LinkedHashMap.prototype.clear],
        [
            'kotlin.collections.LinkedHashMap.prototype.containsKey',
            kotlin.collections.LinkedHashMap.prototype.containsKey,
        ],
        [
            'kotlin.collections.LinkedHashMap.prototype.containsValue',
            kotlin.collections.LinkedHashMap.prototype.containsValue,
        ],
        ['kotlin.collections.LinkedHashMap.prototype.get', kotlin.collections.LinkedHashMap.prototype.get],
        // TODO ['kotlin.collections.LinkedHashMap.prototype.getOrDefault',kotlin.collections.LinkedHashMap.prototype.getOrDefault],
        ['kotlin.collections.LinkedHashMap.prototype.isEmpty', kotlin.collections.LinkedHashMap.prototype.isEmpty],
        ['kotlin.collections.LinkedHashMap.prototype.put', kotlin.collections.LinkedHashMap.prototype.put],
        ['kotlin.collections.LinkedHashMap.prototype.putAll', kotlin.collections.LinkedHashMap.prototype.putAll],
        ['kotlin.collections.LinkedHashMap.prototype.remove', kotlin.collections.LinkedHashMap.prototype.remove],
        ['kotlin.collections.LinkedHashMap', kotlin.collections.LinkedHashMap],
        ['kotlin.collections.LinkedHashSet.prototype.add', kotlin.collections.LinkedHashSet.prototype.add],
        ['kotlin.collections.LinkedHashSet.prototype.addAll', kotlin.collections.LinkedHashSet.prototype.addAll],
        ['kotlin.collections.LinkedHashSet.prototype.clear', kotlin.collections.LinkedHashSet.prototype.clear],
        ['kotlin.collections.LinkedHashSet.prototype.contains', kotlin.collections.LinkedHashSet.prototype.contains],
        [
            'kotlin.collections.LinkedHashSet.prototype.containsAll',
            kotlin.collections.LinkedHashSet.prototype.containsAll,
        ],
        ['kotlin.collections.LinkedHashSet.prototype.isEmpty', kotlin.collections.LinkedHashSet.prototype.isEmpty],
        ['kotlin.collections.LinkedHashSet.prototype.iterator', kotlin.collections.LinkedHashSet.prototype.iterator],
        ['kotlin.collections.LinkedHashSet.prototype.remove', kotlin.collections.LinkedHashSet.prototype.remove],
        ['kotlin.collections.LinkedHashSet.prototype.removeAll', kotlin.collections.LinkedHashSet.prototype.removeAll],
        ['kotlin.collections.LinkedHashSet.prototype.retainAll', kotlin.collections.LinkedHashSet.prototype.retainAll],
        ['kotlin.collections.LinkedHashSet.prototype.toArray', kotlin.collections.LinkedHashSet.prototype.toArray],
        ['kotlin.collections.LinkedHashSet.prototype.toArray', kotlin.collections.LinkedHashSet.prototype.toArray],
        ['kotlin.collections.LinkedHashSet', kotlin.collections.LinkedHashSet],
        ['kotlin.collections.linkedMapOf', kotlin.collections.linkedMapOf],
        ['kotlin.collections.linkedSetOf', kotlin.collections.linkedSetOf],
        ['kotlin.collections.listOf', kotlin.collections.listOf],
        // ['kotlin.collections.listOfNotNull', kotlin.collections.listOfNotNull],
        ['kotlin.collections.LongIterator.prototype.next', kotlin.collections.LongIterator.prototype.next],
        ['kotlin.collections.LongIterator', kotlin.collections.LongIterator],
        ['kotlin.collections.mapOf', kotlin.collections.mapOf],
        ['kotlin.collections.mutableListOf', kotlin.collections.mutableListOf],
        ['kotlin.collections.mutableMapOf', kotlin.collections.mutableMapOf],
        ['kotlin.collections.mutableSetOf', kotlin.collections.mutableSetOf],
        ['kotlin.collections.setOf', kotlin.collections.setOf],
        // ['kotlin.collections.setOfNotNull', kotlin.collections.setOfNotNull],
        ['kotlin.collections.ShortIterator.prototype.next', kotlin.collections.ShortIterator.prototype.next],
        ['kotlin.collections.ShortIterator', kotlin.collections.ShortIterator],
        ['kotlin.collections.UByteIterator.prototype.next', kotlin.collections.UByteIterator.prototype.next],
        ['kotlin.collections.UByteIterator', kotlin.collections.UByteIterator],
        ['kotlin.collections.UIntIterator.prototype.next', kotlin.collections.UIntIterator.prototype.next],
        ['kotlin.collections.UIntIterator', kotlin.collections.UIntIterator],
        ['kotlin.collections.ULongIterator.prototype.next', kotlin.collections.ULongIterator.prototype.next],
        ['kotlin.collections.ULongIterator', kotlin.collections.ULongIterator],
        ['kotlin.collections.UShortIterator.prototype.next', kotlin.collections.UShortIterator.prototype.next],
        ['kotlin.collections.UShortIterator', kotlin.collections.UShortIterator],
        ['kotlin.emptyArray', kotlin.emptyArray],
        ['kotlin.Enum.prototype.compareTo', kotlin.Enum.prototype.compareTo],
        ['kotlin.Enum', kotlin.Enum],
        ['kotlin.KotlinVersion.prototype.compareTo', kotlin.KotlinVersion.prototype.compareTo],
        ['kotlin.KotlinVersion', kotlin.KotlinVersion],
        ['kotlin.LazyThreadSafetyMode.valueOf', kotlin.LazyThreadSafetyMode.valueOf],
        ['kotlin.LazyThreadSafetyMode.values', kotlin.LazyThreadSafetyMode.values],
        ['kotlin.LazyThreadSafetyMode', kotlin.LazyThreadSafetyMode],
        ['kotlin.Pair.prototype.toString', kotlin.Pair.prototype.toString],
        ['kotlin.Pair', kotlin.Pair],
        [
            'kotlin.properties.ObservableProperty.prototype.afterChange',
            kotlin.properties.ObservableProperty.prototype.afterChange,
        ],
        [
            'kotlin.properties.ObservableProperty.prototype.beforeChange',
            kotlin.properties.ObservableProperty.prototype.beforeChange,
        ],
        [
            'kotlin.properties.ObservableProperty.prototype.getValue',
            kotlin.properties.ObservableProperty.prototype.getValue,
        ],
        [
            'kotlin.properties.ObservableProperty.prototype.setValue',
            kotlin.properties.ObservableProperty.prototype.setValue,
        ],
        ['kotlin.properties.ObservableProperty', kotlin.properties.ObservableProperty],
        ['kotlin.random.Random.prototype.nextBoolean', kotlin.random.Random.prototype.nextBoolean],
        // TODO ['kotlin.random.Random.prototype.nextBytes', kotlin.random.Random.prototype.nextBytes],
        ['kotlin.random.Random.prototype.nextDouble', kotlin.random.Random.prototype.nextDouble],
        ['kotlin.random.Random.prototype.nextFloat', kotlin.random.Random.prototype.nextFloat],
        ['kotlin.random.Random.prototype.nextInt', kotlin.random.Random.prototype.nextInt],
        ['kotlin.random.Random.prototype.nextLong', kotlin.random.Random.prototype.nextLong],
        ['kotlin.random.Random', kotlin.random.Random],
        ['kotlin.ranges.CharProgression.prototype.isEmpty', kotlin.ranges.CharProgression.prototype.isEmpty],
        ['kotlin.ranges.CharProgression.prototype.iterator', kotlin.ranges.CharProgression.prototype.iterator],
        ['kotlin.ranges.CharProgression', kotlin.ranges.CharProgression],
        ['kotlin.ranges.CharRange.prototype.contains', kotlin.ranges.CharRange.prototype.contains],
        ['kotlin.ranges.CharRange', kotlin.ranges.CharRange],
        ['kotlin.ranges.IntProgression.prototype.isEmpty', kotlin.ranges.IntProgression.prototype.isEmpty],
        ['kotlin.ranges.IntProgression.prototype.iterator', kotlin.ranges.IntProgression.prototype.iterator],
        ['kotlin.ranges.IntProgression', kotlin.ranges.IntProgression],
        ['kotlin.ranges.IntRange.prototype.contains', kotlin.ranges.IntRange.prototype.contains],
        ['kotlin.ranges.IntRange', kotlin.ranges.IntRange],
        ['kotlin.ranges.LongProgression.prototype.isEmpty', kotlin.ranges.LongProgression.prototype.isEmpty],
        ['kotlin.ranges.LongProgression.prototype.iterator', kotlin.ranges.LongProgression.prototype.iterator],
        ['kotlin.ranges.LongProgression', kotlin.ranges.LongProgression],
        ['kotlin.ranges.LongRange.prototype.contains', kotlin.ranges.LongRange.prototype.contains],
        ['kotlin.ranges.LongRange', kotlin.ranges.LongRange],
        ['kotlin.ranges.UIntProgression.prototype.isEmpty', kotlin.ranges.UIntProgression.prototype.isEmpty],
        ['kotlin.ranges.UIntProgression.prototype.iterator', kotlin.ranges.UIntProgression.prototype.iterator],
        ['kotlin.ranges.UIntProgression', kotlin.ranges.UIntProgression],
        ['kotlin.ranges.UIntRange.prototype.contains', kotlin.ranges.UIntRange.prototype.contains],
        ['kotlin.ranges.UIntRange', kotlin.ranges.UIntRange],
        ['kotlin.ranges.ULongProgression.prototype.isEmpty', kotlin.ranges.ULongProgression.prototype.isEmpty],
        ['kotlin.ranges.ULongProgression.prototype.iterator', kotlin.ranges.ULongProgression.prototype.iterator],
        ['kotlin.ranges.ULongProgression', kotlin.ranges.ULongProgression],
        // TODO ['kotlin.ranges.ULongRange.prototype.contains', kotlin.ranges.ULongRange.prototype.contains],
        ['kotlin.ranges.ULongRange', kotlin.ranges.ULongRange],
        ['kotlin.reflect.KVariance.valueOf', kotlin.reflect.KVariance.valueOf],
        ['kotlin.reflect.KVariance.values', kotlin.reflect.KVariance.values],
        ['kotlin.reflect.KVariance', kotlin.reflect.KVariance],
        ['kotlin.Result.prototype.exceptionOrNull', kotlin.Result.prototype.exceptionOrNull],
        ['kotlin.Result.prototype.getOrNull', kotlin.Result.prototype.getOrNull],
        ['kotlin.Result.prototype.toString', kotlin.Result.prototype.toString],
        ['kotlin.Result', kotlin.Result],
        ['kotlin.sequences.emptySequence', kotlin.sequences.emptySequence],
        // ['kotlin.sequences.generateSequence', kotlin.sequences.generateSequence],
        ['kotlin.sequences.sequenceOf', kotlin.sequences.sequenceOf],
        // ['kotlin.sequences.SequenceScope.prototype.yieldAll',kotlin.sequences.SequenceScope.prototype.yieldAll],
        ['kotlin.sequences.SequenceScope', kotlin.sequences.SequenceScope],
        ['kotlin.Triple.prototype.toString', kotlin.Triple.prototype.toString],
        ['kotlin.Triple', kotlin.Triple],
    ];

    tests.forEach((test: [string, Function]) => {
        it(`"${test[0]}" should be a function`, async () => {
            expect(typeof test[1]).toBe('function');
        });
    });

    it('function calls', () => {
        const list = kotlin.collections.listOf(['a', 'b', 'c']);
        expect(list.get(1)).toBe('b');
        expect(list.isEmpty()).toBe(false);
        expect(list.size).toBe(3);
        expect(typeof list.subList).toBe('function');

        let i = 0;
        for (const n of list) {
            expect(n).toBe(list.get(i++));
        }
        const a = list.toArray();
        expect(a.length).toBe(list.size);
        for (let i = 0; i++; i < list.size) {
            expect(a[i].toBe(list.get(i) + 5));
        }

        const e = kotlin.collections.emptyList();
        let executed = false;
        for (const _ of e) {
            executed = true;
        }
        expect(executed).toBe(false);
        const array = e.toArray();
        expect(array.length).toBe(0);

        const mlist = kotlin.collections.mutableListOf(['a', 'b', 'c']);
        expect(mlist.get(1)).toBe('b');
        expect(mlist.isEmpty()).toBe(false);
        expect(mlist.size).toBe(3);
        expect(typeof mlist.subList).toBe('function');
        mlist.add('x');
        expect(mlist.get(2)).toBe('c');
        expect(mlist.get(3)).toBe('x');
        expect(mlist.size).toBe(4);

        const mmap = kotlin.collections.mutableMapOf([]);
        expect(mmap.isEmpty()).toBe(true);
        mmap.put('three', 3);
        mmap.put('five', 5);
        mmap.put('twentythree', 23);
        expect(mmap.isEmpty()).toBe(false);
        expect(mmap.size).toBe(3);
        expect(mmap.get('five')).toBe(5);
        expect(mmap.get('six')).toBe(null);
    });
});

// function expectFunctions(...tests: [string, Function][]) {
//     for (const test of tests) {
//         it(test[0], () => {
//             expect(typeof test[1])
//                 .withContext(`for function ${test[0]}`)
//                 .toBe('function');
//         });
//     }
// }
