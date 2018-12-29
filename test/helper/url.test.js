import { formatSearch } from '../../src/helper/url';

describe('src/helper/url.js', () => {
    describe('formatSearch', () => {
        test('should format root value, and filter out empty string/undefined/null', () => {
            expect(
                formatSearch({
                    a: 1,
                    b: 0,
                    c: 'foo',
                    d: '',
                    e: undefined,
                    f: null,
                }),
            ).toEqual('a=1&b=0&c=foo');
        });

        test('should format array value, and stringify object value', () => {
            expect(
                formatSearch({
                    a: 1,
                    b: 'foo',
                    c: [4, 5, 'bar'],
                    d: { foo: 'bar' },
                }),
            ).toEqual('a=1&b=foo&c=4&c=5&c=bar&d={"foo":"bar"}');
        });
    });
});


