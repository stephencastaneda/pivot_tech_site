import React from 'react';
import './DataAnalyticsPage.scss';
import MyFooter from '../../components/MyFooter/MyFooter';

function DataPage() {
	return (
		<>
			<div className="data-page-container">
				<div class="card data-page-card-container mt-5">
					<div class="card-body data-page-card">
						<h1 className="data-page-title text-center text-white">
							Data Analytics
						</h1>
					</div>
				</div>

				<div class="card data-page-text-card mt-5">
					<div class="card-body data-text-card">
						<p>
							The technology boom of the last 20 years has generated more
							information than organizations know what to do with, and they need
							people to analyze the data and put it to use to make solid
							business decisions.
						</p>
						<p>
							The World Economic Forum listed data analyst as one of the most
							in-demand job categories across all industries in the U.S. as we
							enter the 2020s.
						</p>
						<p>
							If you are interested in data and analytics, there are exciting
							career possibilities to explore.
						</p>
						<p>Tuition: $6,500</p>
						<p>Deposit: $1,000</p>
						<p>Payment plan will vary on individual basis</p>
						<p>Scholarships are offered if financial assitance is needed</p>
					</div>
				</div>
				<div class="card data-course-title-card mt-5">
					<div class="card-body course-text">
						<h2 className="text-center text-white">20 Week Course Breakdown</h2>
					</div>
				</div>

				<div className="courses-flex d-flex justify-content-around flex-wrap mt-5">
					<div class="card data-page-course-card mb-5">
						<h5 class="card-header data-page-card-header">
							Module 1: Microsoft Excel &amp; Data Analysis Workflow
						</h5>
						<div class="card-body data-page-course-card-text">
							<h5 class="card-title">Weeks 1-4</h5>
							<ul>
								<li>Advanced Excel Concepts</li>
								<li>VBA</li>
								<li>Statistical Modeling</li>
								<li>Data Analysis Workflow</li>
							</ul>
						</div>
					</div>

					<div class="card data-page-course-card mb-5">
						<h5 class="card-header data-page-card-header">
							Module 2: Database Concepts &amp; SQL
						</h5>
						<div class="card-body data-page-course-card-text">
							<h5 class="card-title">Weeks 5-8</h5>
							<ul>
								<li>Database Concepts</li>
								<li>Microsoft SQL Server</li>
								<li>Data Normalization</li>
								<li>T-SQL</li>
							</ul>
						</div>
					</div>

					<div class="card data-page-course-card mb-5">
						<h5 class="card-header data-page-card-header">
							Module 3: Python &amp; Statistics
						</h5>
						<div class="card-body data-page-course-card-text">
							<h5 class="card-title">Weeks 9-12</h5>
							<ul>
								<li>Python, APIs</li>
								<li>JSON, NumPy</li>
								<li>Pandas, Matplotilib</li>
								<li>Beautiful Soup</li>
							</ul>
						</div>
					</div>

					<div class="card data-page-course-card mb-5">
						<h5 class="card-header data-page-card-header">
							Module 4: Data Visualization
						</h5>
						<div class="card-body data-page-course-card-text">
							<h5 class="card-title">Weeks 13-16</h5>
							<ul>
								<li>Tableau</li>
								<li>Microsoft Power BI</li>
								<li>Dashboard</li>
								<li>Storytelling</li>
							</ul>
						</div>
					</div>

					<div class="card data-page-course-card mb-5">
						<h5 class="card-header data-page-card-header">
							Module 5: Advanced Topics
						</h5>
						<div class="card-body data-page-course-card-text">
							<h5 class="card-title">Weeks 17-18</h5>
							<ul>
								<li>ETL</li>
								<li>Intro to AI</li>
								<li>Machine Learning</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="apply-btn-flex">
					<button
						type="button"
						className="btn apply-btn rounded-pill text-white btn-lg font-weight-bold"
					>
						Apply Now
					</button>
				</div>
			</div>
			<MyFooter />
		</>
	);
}

export default DataPage;
