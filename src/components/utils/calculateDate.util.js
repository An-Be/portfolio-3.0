export const calculateDate = (postingDate) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[postingDate.getMonth()];
    const day = postingDate.getDate();
    const year = postingDate.getFullYear();

    return month + " " + day + ", " + year; 
}