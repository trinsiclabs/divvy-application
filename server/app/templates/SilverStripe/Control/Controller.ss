<!DOCTYPE html>
<html lang="$ContentLocale">
    <head>
        <title>$SiteConfig.Title</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <% base_tag %>
        $MetaTags
    </head>
    <body>
        <div id="App" style="display: flex; flex-direction: column; min-height: 100vh;"></div>

        <script>
            window.APP = window.APP || {};
            window.APP.GRAPHQL_URI = '$GraphQLURI';
            window.APP.SECURITY_ID = '$SecurityID';
        </script>
    </body>
</html>
