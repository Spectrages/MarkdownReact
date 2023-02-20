import { Box } from '@mui/material';
import Chart from 'chart.js'
import { useEffect, useState } from 'react';

const getData = () => {
    let arr = [];
    let a = 27;
    while(a !== 1) {
        arr.push(a)
        a % 2 === 0 ? 
        a /= 2 : 
        a = (a * 3) + 1
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