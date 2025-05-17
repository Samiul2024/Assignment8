import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';
// import { getPath } from 'recharts/types/shape/Curve';
const getPath = (x, y, width, height) => (
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);
const TriangleBar = (props) => {
    const {
        fill, x, y, width, height,
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const BarChartComponent = ({ data = [] }) => {
    const formatted = data.map((lawyer) => ({
        name: lawyer.name,
        Lawers: parseFloat(lawyer.consultationFee),
    }));
    if (formatted.length === 0) {
        return (
            <div className="w-full h-40 flex justify-center items-center text-gray-500 text-lg">
                No appointment chart data available.
            </div>
        );
    }
    return (
        <div className="w-full h-80 px-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={formatted}
                    margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Lawers" fill="#3b82f6" name="" shape={<TriangleBar />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;
