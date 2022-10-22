import React from 'react'
import { connect } from 'react-redux'
import { getCurrentPage } from '../../../redux/slices/usersSlice'
import UsersBlock from './UsersBlock'

let mapStateToProps = state => {
    return {
        users: state.users.users,
        currentPage: state.users.currentPage,
        loading: state.users.loading,
        status: state.users.status,
    }
}

let mapDispatchToProps = dispatch => {
    return {
        getCurrentPage: curPage => {
            dispatch(getCurrentPage(curPage))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersBlock)
