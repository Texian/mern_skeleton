import { useDispatch } from 'react-redux';
import { deleteTimesheet } from '../features/timesheets/timesheetSlice';

function TimesheetItem({ timesheet }) {
	const dispatch = useDispatch();
	return (
		<div className='timesheet'>
			<div>
				{new Date(timesheet.createdAt).toLocaleDateString('en-US')}
				<h2>{timesheet.text}</h2>
				<button
					onClick={() => dispatch(deleteTimesheet(timesheet._id))}
					className='close'>
					X
				</button>
			</div>
		</div>
	);
}

export default TimesheetItem;
