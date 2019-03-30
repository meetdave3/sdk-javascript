import React from 'react';

export default function (props: any) {
    return (
        <div className='table-wrapper'>
            <table>
                <thead>
                    <tr>
                        {props.head.map((item: any, index: number) => <th key={index}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.body.map((row: any, index: number) => (
                        <tr key={index}>
                            {row.map((cell: any, i: number) => <td key={i}>{cell}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
