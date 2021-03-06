<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-plugins-data-server](./kibana-plugin-plugins-data-server.md) &gt; [IndexPatternsFetcher](./kibana-plugin-plugins-data-server.indexpatternsfetcher.md) &gt; [getFieldsForWildcard](./kibana-plugin-plugins-data-server.indexpatternsfetcher.getfieldsforwildcard.md)

## IndexPatternsFetcher.getFieldsForWildcard() method

Get a list of field objects for an index pattern that may contain wildcards

<b>Signature:</b>

```typescript
getFieldsForWildcard(options: {
        pattern: string | string[];
        metaFields?: string[];
    }): Promise<FieldDescriptor[]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  options | <code>{</code><br/><code>        pattern: string &#124; string[];</code><br/><code>        metaFields?: string[];</code><br/><code>    }</code> |  |

<b>Returns:</b>

`Promise<FieldDescriptor[]>`

