import React from 'react';

class StockChart extends React.Component<{chartData: any[]}, {}>{
    constructor(props: any) {
        super(props);
    }

    render() {
        const { chartData } = this.props;

        return (
            <div className="relative overflow-x-auto mt-16">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Open
                            </th>
                            <th scope="col" className="px-6 py-3">
                                High
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Low
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Close
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Volume
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            chartData.map((item: any, index: number) => 
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(item.date)}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.open}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.high}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.low}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.close}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.volume}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
};

export default StockChart;