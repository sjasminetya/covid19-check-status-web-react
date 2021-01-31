import React, {useEffect} from 'react'
import {makeStyles} from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {useDispatch, useSelector} from 'react-redux'
import {getProvince} from '../../configs/redux/actions'

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
})

export default function TableProvinsi() {
    const styles = useStyles()
    const dispatch = useDispatch()
    const provinceState = useSelector(state => state.indonesia.province)
    useEffect(() => {
        dispatch(getProvince())
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        {provinceState.map((item) => (
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
