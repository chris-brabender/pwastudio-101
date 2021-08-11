/* eslint-disable */
/**
 * Custom interceptors for the project.
 *
 * This project has a section in its package.json:
 *    "pwa-studio": {
 *        "targets": {
 *            "intercept": "./local-intercept.js"
 *        }
 *    }
 *
 * This instructs Buildpack to invoke this file during the intercept phase,
 * as the very last intercept to run.
 *
 * A project can intercept targets from any of its dependencies. In a project
 * with many customizations, this function would tap those targets and add
 * or modify functionality from its dependencies.
 */

function localIntercept(targets) {
    const { Targetables } = require('@magento/pwa-buildpack');
    const targetables = Targetables.using(targets);

    /**
     * =====================================================================
     * Exercise 1 - Remove with Targetables
     * =====================================================================
     */

        /** Uncomment me to view the result
        const headerComponent = targetables.reactComponent(
            '@magento/venia-ui/lib/components/Header/header.js'
        );

        headerComponent.removeJSX('<StoreSwitcher />');

    /**
     * End Exercise 1 - Remove with Targetables
     */



    /**
     * =====================================================================
     * Exercise 2 - Modify with Targetables
     * =====================================================================
     */

        /** Uncomment me to view the result
        const logoComponent = targetables.reactComponent(
            '@magento/venia-ui/lib/components/Logo/logo.js'
        );

        logoComponent.setJSXProps('Image', {
            'src': "{'https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg'}"
        });

    /**
     * End Exercise 2 - Modify with Targetables
     */



    /**
     * =====================================================================
     * Exercise 3 - Add with Targetables
     * =====================================================================
     */

        /** Uncomment me to view the result
        const headerComponent = targetables.reactComponent(
            '@magento/venia-ui/lib/components/Header/header.js'
        );

        headerComponent.prependJSX('<div className={classes.switchers}>', '<div>Free Shipping on orders over $25</div>');

    /**
     * End Exercise 3 - Add with Targetables
     */



    /**
     * =====================================================================
     * Exercise 3 - Add with Targetables - BONUS ROUND - Translations
     * =====================================================================
     */

        /** Uncomment me to view the result
        const headerComponent = targetables.reactComponent(
            '@magento/venia-ui/lib/components/Header/header.js'
        );
        headerComponent.addImport("{ FormattedMessage } from 'react-intl'");
        headerComponent.prependJSX('<div className={classes.switchers}>', '<FormattedMessage id="header.FreeShipping" defaultMessage="Free Shipping on orders over $25" />');

    /**
     * End Exercise 3 - Add with Targetables - BONUS ROUND - Translations
     */



    /**
     * =====================================================================
     * Exercise 4 - CSS with Targetables
     * =====================================================================
     */

        /** Uncomment me to view the result
        const productFullDetailComponent = targetables.reactComponent(
            '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js'
        );
        
        productFullDetailComponent.addImport("buttonClasses from '../../../../../../src/components/ProductFullDetail/productFullDetailButton.css'");
        productFullDetailComponent.setJSXProps('Button', {
            'className': '{buttonClasses.root}'
        })

    /**
     * End Exercise 4 - CSS with Targetables
     */


    /**
     * =====================================================================
     * Exercise 6 - Hello World
     * =====================================================================
     */

        /** Uncomment me to view the result
        targets.of("@magento/venia-ui").routes.tap(routes => {
            routes.push({
                name: "MyGreetingRoute",
                pattern: "/greeting/:who?",
                path: require.resolve("./src/components/GreetingPage/greetingPage.js")
            });
            return routes;
        });

    /**
     * End Exercise 6 - Hello World
     */


    /**
     * =====================================================================
     * Exercise 6 - Hello World - BONUS ROUND
     * =====================================================================
     */

        /** Uncomment me to view the result
        const greetingPageComponent = targetables.reactComponent(
            require.resolve('./src/components/GreetingPage/greetingPage.js')
        );
        
        greetingPageComponent.addImport("CmsBlock from '@magento/venia-ui/lib/components/CmsBlock'");
        greetingPageComponent.insertAfterJSX('h2', "<CmsBlock identifiers={['contact-us-info']} />");

    /**
     * End Exercise 6 - Hello World - BONUS ROUND
     */
}

module.exports = localIntercept;
