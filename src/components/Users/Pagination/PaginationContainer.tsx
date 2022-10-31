import React from 'react'
import { connect } from 'react-redux'
import { getCurrentPage } from '../../../redux/slices/usersSlice'
import Pagination from './Pagination'
import { RootState } from '../../../redux/store'

let mapStateToProps = (state: RootState) => {
    return {
        totalPages: state.users.totalPages,
        currentPage: state.users.currentPage,
    }
}

let mapDispatchToProps = dispatch => {
    return {
        getCurrentPage: curPage => {
            dispatch(getCurrentPage(curPage))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
