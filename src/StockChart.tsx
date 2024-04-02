import React from 'react';
import { StockChartComponent, StockChartSeriesCollectionDirective,
    StockChartTrendlinesDirective, StockChartTrendlineDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, Logarithmic } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';

class StockChart extends React.Component<{chartData: any}, {}>{
    constructor(props: any) {
        super(props);
    }

    render() {
        const { chartData } = this.props;

        return (
            <StockChartComponent id="stockchart" title="IBM Stock Price" primaryXAxis={{ isInversed: false }}>
                <Inject
                    services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, Logarithmic, CandleSeries, HiloOpenCloseSeries,
                    HiloSeries, RangeAreaSeries, Trendlines,EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator,
                    AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]}
                />
                <StockChartSeriesCollectionDirective>
                    <StockChartSeriesDirective dataSource={chartData} type='Candle' xName='date' high='high' low='low' open='open' close='close' name='IBM'>
                    </StockChartSeriesDirective>
                </StockChartSeriesCollectionDirective>
            </StockChartComponent>
        )
    }
};

export default StockChart;