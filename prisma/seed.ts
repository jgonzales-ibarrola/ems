// Import Prisma Client
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Define the main function that will handle database operations
async function main() {
	// Create a new user in the database using Prisma Client
	const employee1 = await prisma.employee.create({
		data: {
			name: 'Joshua Gonzales',
			department: 'IT',
			agency: 'Inorganic',
			Attendance: {
				create: [
					{
						time_in: "2025-02-24T07:00:12.660Z",
						time_out: null,
						official_business: null
					}
				]
			}
		},
		include: {
			Attendance: true
		}
	});

	console.log(`Created employee: ${employee1.name}`);
	console.log(`Created time_in: ${employee1.Attendance.map((a) => a.time_in)}`);
}

// Execute the main function and handle disconnection and errors
main()
	.then(() => prisma.$disconnect()) // Disconnect from the database on successful completion
	.catch(async (e) => {
		console.error(e); // Log any errors
		await prisma.$disconnect(); // Ensure disconnection even if an error occurs
		process.exit(1); // Exit the process with an error code
	});