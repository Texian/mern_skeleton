import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TimesheetForm from '../components/TimesheetForm';
import Spinner from '../components/Spinner';
import { getTimesheets, reset } from '../features/timesheets/timesheetSlice';
import TimesheetItem from '../components/TimesheetItem';

function Dashboard() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { timesheets, isLoading, isError, message } = useSelector(
		(state) => state.timesheets
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		if (!user) {
			navigate('/login');
		}

		dispatch(getTimesheets());

		return () => {
			dispatch(reset());
		};
	}, [user, navigate, isError, message, dispatch]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<section className='heading'>
				<h1>Welcome {user && user.name}</h1>
				<p>Timesheets Dashboard</p>
			</section>
			<TimesheetForm />
			<section className='content'>
				{timesheets.length > 0 ? (
					<div className='timesheets'>
						{timesheets.map((timesheet) => (
							<TimesheetItem
								key={timesheet._id}
								timesheet={timesheet}
							/>
						))}
					</div>
				) : (
					<h3>You haven't set any timesheets</h3>
				)}
			</section>
		</>
	);
}

export default Dashboard;
