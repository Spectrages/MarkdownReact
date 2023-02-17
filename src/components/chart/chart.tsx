import { Box } from '@mui/material';
import Chart from 'chart.js'
import { useEffect, useState } from 'react';

const getRandomInt = (max: number) => Math.floor(Math.random() * max);
const getData = () => {
    let arr = new Array(10);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = getRandomInt(1000)
    }
    return arr;
}


const CustomChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(getData());
    }, [])


    const canvasRef = document.getElementById('myChart1') as HTMLCanvasElement;
    let ctx;
    if (canvasRef !== null) {
        ctx = canvasRef.getContext('2d');
    }
    const name = 'Hello'
    if (ctx !== undefined) {
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data,
                datasets: [{
                    label: name,
                    data: data,
                    borderWidth: 3,
                    borderColor: 'green',
                    backgroundColor: 'transparent'
                }],
            }
        });
    }

    return (
        <Box sx={{
            display: 'flex',

        }}>
            <canvas id="myChart1" />
        </Box>
    )
}


export default CustomChart