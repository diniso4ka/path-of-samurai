import React from 'react'
import { connect } from 'react-redux'
import { getTotalPages,getCurrentPage} from '../../../redux/slices/usersSlice'
import Pagination from './Pagination'




let mapStateToProps = (state) => {
   return {
      totalPages: state.users.totalPages,
      currentPage: state.users.currentPage,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      getCurrentPage:(curPage)=>{
         dispatch(getCurrentPage(curPage))
      },
      getTotalPages:(totalPages)=>{
         dispatch(getTotalPages(totalPages))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
