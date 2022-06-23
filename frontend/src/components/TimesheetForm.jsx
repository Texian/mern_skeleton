import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTimesheet } from '../features/timesheets/timesheetSlice';

function TimesheetForm() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(createTimesheet({ text }));
		setText('');
	};

	return (
		<section className='form'>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='text'>Monday</label>
					<input
						type='text'
						name='text'
						id='text'
						value={text}
						onChange={(e) => setText(e.value)}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='text'>Tuesday</label>
					<input
						type='text'
						name='text'
						id='text'
						value={text}
						onChange={(e) => setText(e.value)}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='text'>Wednesday</label>
					<input
						type='text'
						name='text'
						id='text'
						value={text}
						onChange={(e) => setText(e.value)}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='text'>Thursday</label>
					<input
						type='text'
						name='text'
						id='text'
						value={text}
						onChange={(e) => setText(e.value)}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='text'>Friday</label>
					<input
						type='text'
						name='text'
						id='text'
						value={text}
						onChange={(e) => setText(e.value)}
					/>
				</div>
				<div className='form-group'>
					<button className='btn btn-block' type='submit'>
						Add Hours
					</button>
				</div>
			</form>
		</section>
	);
}

export default TimesheetForm;
