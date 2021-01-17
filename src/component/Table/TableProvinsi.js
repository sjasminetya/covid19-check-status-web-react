import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {makeStyles} from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
})

export default function TableProvinsi() {
    const styles = useStyles()

    const [dataProvince, setDataProvince] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`${process.env.REACT_APP_API_COVID19_INDONESIA}/provinsi`)
            console.log(data.data)
            setDataProvince(data.data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Province</TableCell>
                            <TableCell>Cases</TableCell>
                            <TableCell>Treated</TableCell>
                            <TableCell>Recovered</TableCell>
                            <TableCell>Deaths</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataProvince.map((item) => (
                            <TableRow key={item.provinsi}>
                                <TableCell component="th" scope="row">{item.provinsi}</TableCell>
                                <TableCell component="th" scope="row">{item.kasus}</TableCell>
                                <TableCell component="th" scope="row">{item.dirawat}</TableCell>
                                <TableCell component="th" scope="row">{item.sembuh}</TableCell>
                                <TableCell component="th" scope="row">{item.meninggal}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
