import React from 'react'
import { connect } from 'react-redux'
import { getCurrentPage } from '../../../redux/slices/usersSlice'
import Pagination from './Pagination'

let mapStateToProps = state => {
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
