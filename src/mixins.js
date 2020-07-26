export default {
    methods: {
        dataFormat(date) {
            let now = new Date(date);

            return `${now.getDate()}.${now.getMonth()}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
        }
    }
}
