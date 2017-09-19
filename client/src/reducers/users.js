export default function() {
    const today = new Date();

    return [
        {
            id: 1,
            month: today.getMonth() + 1,
            day: today.getDate(),
            year: today.getFullYear()
        },
        {
            id: 2,
            name: "Santa-test",
            month: "December",
            day: 25
        }
    ]
}