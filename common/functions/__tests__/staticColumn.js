import expect from 'expect.js';
import { staticColumn } from '../staticColumn';
import { functionWrapper } from '../../../__tests__/helpers/function_wrapper';
import { testTable } from './fixtures/test_tables';

describe('staticColumn', () => {
  const fn = functionWrapper(staticColumn);

  it('adds a column to a datatable with a static value in every row', () => {
    const result = fn(testTable, { _: 'foo', value: 'bar' });

    expect(result.type).to.be('datatable');
    expect(result.columns).to.eql([...testTable.columns, { name: 'foo', type: 'string' }]);
    expect(result.rows.every(row => typeof row.foo === 'string')).to.be(true);
    expect(result.rows.every(row => row.foo === 'bar')).to.be(true);
  });

  it('overwrites an existing column if provided an existing column name', () => {
    const result = fn(testTable, { _: 'name', value: 'John' });

    expect(result.type).to.be('datatable');
    expect(result.columns).to.eql(testTable.columns);
    expect(result.rows.every(row => typeof row.name === 'string')).to.be(true);
    expect(result.rows.every(row => row.name === 'John')).to.be(true);
  });

  describe('missing args:', () => {
    describe('_', () => {
      it('throws when no column name or invalid column name is provided', () => {
        expect(() => fn(testTable)).to.throwException(e => {
          expect(e.message).to.be('Must provide a column name');
        });
        expect(() => fn(testTable, { value: 'foo' })).to.throwException(e => {
          expect(e.message).to.be('Must provide a column name');
        });
        expect(() => fn(testTable, { _: '', value: 'foo' })).to.throwException(e => {
          expect(e.message).to.be('Must provide a column name');
        });
      });
    });

    describe('value', () => {
      it('adds a column with null values', () => {
        const result = fn(testTable, { _: 'empty' });

        expect(result.type).to.be('datatable');
        expect(result.columns).to.eql([...testTable.columns, { name: 'empty', type: 'null' }]);
        expect(result.rows.every(row => row.empty === null)).to.be(true);
      });
    });
  });
});
