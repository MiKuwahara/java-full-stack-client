import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";

import {Container, Row, Col} from "react-bootstrap";
import { type } from '@testing-library/user-event/dist/type';

function Dashboard() {
	const {user} = useSelector((state) => state.auth)
	//const [user, setUser] = useState("");
	//console.log(user.reviewIds[0])

	/*
	useEffect((e) => {
		const user = localStorage.getItem("user");
		setUser(user);
	}, []);
	*/
	console.log("User id")
	console.log(typeof(user.email))
	return (
		<Container>

			<Row >
				<Col><h1 >My Reviews</h1></Col>
			</Row>

				<Row>
					
						<Col >No</Col>
						<Col >Movie</Col>
						<Col >Review</Col>
				
				</Row>
				<Row>
					<Col>
					<hr /></Col>
				</Row>
				
					{user.reviewIds.map((review, index) => (
						<>
						<Row >
							<Col >
								{index + 1}
							</Col>
							<Col >
								Movie
							</Col>
							<Col >
								{review.body}
							</Col>
						</Row>
						<Row>
						<Col>
						<hr /></Col>
					</Row>
						</>
						
					))}
				
			
		</Container>
	)
}

export default Dashboard