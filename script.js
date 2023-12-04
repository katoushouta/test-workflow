document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('startWork').addEventListener('click', () => {
        alert("出勤しました");
    });

    document.getElementById('endWork').addEventListener('click', () => {
        console.log('退勤しました');
    });

    document.getElementById('startBreak').addEventListener('click', () => {
        console.log('休憩を開始しました');
    });

    document.getElementById('endBreak').addEventListener('click', () => {
        console.log('休憩から戻りました');
    });
});
