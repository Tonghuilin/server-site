require("@babel/register");
const { writeFileSync } = require('fs');

/**
 * Prepare data.json for handlebars templates
 */
class PreHandlebarsPlugin {
    constructor(props) {
        const { entry, output } = props;

        this.entry = entry;
        this.output = output;
    }

    apply(compiler) {
        compiler.hooks.entryOption.tap('Pre Handlebars Plugin', (
            stats /* stats is passed as argument when done hook is tapped.  */
        ) => {
            try {
                const data = require(this.entry);
                return writeFileSync(this.output, JSON.stringify(data, undefined, 4), 'utf8');
            } catch(err) {
                if (err) { return console.log(err); }
                return console.log(`PreHandlebarsPlugin updates ${this.output} successfully`);
            }
        });
    }
}

module.exports = PreHandlebarsPlugin;
