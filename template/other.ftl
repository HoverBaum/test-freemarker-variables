<#assign puerFJSONData=puerFDataObject?eval />
<@createGlobals/>
<#macro createGlobals>
    <#list puerFJSONData?keys as x>
        <#if x!='class' && puerFJSONData[x]?? && !puerFJSONData[x]?is_method>
            <@'<#assign ${x} = puerFJSONData[x]>'?interpret />
        </#if>
    </#list>
</#macro>
<!doctype html>
<html lang="en">

<head>
    <#include "/function.ftl" />
    <meta charset="UTF-8">

</head>

<body>

    <h1>${stringify(types)!'fail'}</h1>

    <script>
        var types = ${stringify(types)![]};
    </script>

</body>

</html>
