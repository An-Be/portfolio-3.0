export const randomColor = () => {
    const randomNum = Math.floor(Math.random() * 9);
    const colors = ['#00539C', '#EEA47F', '#F96167', '#2F3C7E', '#E2D1F9', '#990011', '#EE4E34', '#3A6B35', '#79A7D3']
    return colors[randomNum]
}