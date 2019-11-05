const Helper = codecept_helper;

class CustomHelper extends Helper {

    async getNumberOfVisibleElements(selector) {
        const helper = this.helpers['WebDriver'];
        let els = await helper._locate({selector});
        return els.length
    }
}

module.exports = CustomHelper;
