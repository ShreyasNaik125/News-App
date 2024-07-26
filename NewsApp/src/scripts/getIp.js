const getIP = async () => {
    try {
        const response = await fetch('https://api.ipify.org/');
        const ip = await response.text();
        return ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}

export default getIP;