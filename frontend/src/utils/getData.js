async function getData() {
    let response = await fetch('http://localhost:4000');
    let data = await response.json();
    return data;
    
}
export default getData;