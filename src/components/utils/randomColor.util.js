export const randomColor = () => {
    const randomNum = Math.floor(Math.random() * 10);
    const colors = ['#00539C', '#EEA47F', '#F96167', '#2F3C7E', '#CCF381', '#E2D1F9', '#990011', '#EE4E34', '#3A6B35', '#79A7D3']
    return colors[randomNum]
}