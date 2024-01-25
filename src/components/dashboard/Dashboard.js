import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";

import { Container, Row, Col } from "react-bootstrap";
import { type } from '@testing-library/user-event/dist/type';
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import './Dashboard.css';

function Dashboard() {
	const { user } = useSelector((state) => state.auth)
	//const [user, setUser] = useState("");
	//console.log(user.reviewIds[0])

	/*
	useEffect((e) => {
		const user = localStorage.getItem("user");
		setUser(user);
	}, []);
	*/
	console.log("User id")
	console.log(typeof (user.email))
	return (
		<Container>

			<Row >
				<Col><h1 className='title-name'>My Reviews</h1></Col>
			</Row>

			<Row>

				<Col >No</Col>
				<Col >Movie</Col>
				<Col >Review</Col>
				<Col >Operations</Col>

			</Row>
			<Row>
				<Col>
					<hr />
				</Col>
			</Row>

			{user.reviewIds.map((review, index) => (
				<>
					<Row >
						<Col >
							{index + 1}
						</Col>
						<Col >
							{review.movie}
						</Col>
						<Col >
							{review.body}
						</Col>
						<Col >
							<Link to="/Delete">
								<MdOutlineDelete className='delete-icon' />
							</Link>
						</Col>
					</Row>
					<Row>
						<Col>
							<hr />
						</Col>
					</Row>

				</>

			))}


		</Container>
	)
}

export default Dashboard