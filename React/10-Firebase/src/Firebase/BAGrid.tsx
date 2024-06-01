import { Box } from "@mui/material";

type propsType = {
    datasource: any[],
    cols: any[]
}

export default function BAGrid(props: propsType) {
    const { datasource, cols } = props


    return <>
        <Box>
            <table>
                <thead>
                    <tr>
                        {cols && cols.length > 0 ? cols.map((x, i) => <th key={i}>{x.label}</th>) : null}
                    </tr>
                </thead>
                <tbody>
                    {datasource && datasource.length > 0 ? datasource.map((row, rowInd) => <tr key={rowInd}>
                        {cols.map((col, colInd) => <td key={colInd}>{row[col.key]}</td>)}
                    </tr>) : null}
                </tbody>
            </table>
        </Box>
    </>
}