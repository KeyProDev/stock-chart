import React from 'react';
import StockChart from './StockChart';
import StockTable from './StockTable';

class App extends React.Component<{}, {data: any; loading: boolean}>{
    constructor(props: {}) {
        super(props);
        this.state = {
            data: null,
            loading: true,
        };
    }

    convertStockData = (data: any):any[] => {
        const series: any = data["Time Series (Daily)"];
        const results: any[] = Object.keys(series).map(key => {
            const seriesItem = series[key];
            const values: string[] = Object.values(seriesItem);
            return {
                date: new Date( key ),
                open : parseFloat(values[0]),
                high : parseFloat(values[1]),
                low : parseFloat(values[2]),
                close : parseFloat(values[3]),
                volume : parseInt(values[4])
            };
        });
        console.log(results);
        return results;
    }

    componentDidMount() {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${process.env.ALPHAVANTAGE_API_KEY ? process.env.ALPHAVANTAGE_API_KEY : 'demo'}`)
            .then(response => response.json())
            .then(data => {
                this.setState({data: this.convertStockData(data), loading: false});
            })
            .catch(error => console.log(error));
    }

    render() {
        const { data, loading } = this.state;

        if(loading) {
            return (<div>loading...</div>);
        }

        return (
            <>
            <h1 className="text-3xl text-center font-bold text-gray-700">
                IBM Stock Information
            </h1>
            <div className='p-16'>
                <StockChart chartData={data} />
                <StockTable chartData={data} />
            </div>
            </>
        )
    }
};

export default App;