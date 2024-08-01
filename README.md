## Application

This is a simple application allowing visitors to view, create, edit, and delete apartment listings. Users can also search for apartments by name.

The application itself was built in approximately two hours. I then created this README and am now working on creating a demo video to accompany the application.

## Technologies Used

#### Backend:

- Django: Backend framework.
- Django REST Framework: For building web API in Django.

#### Frontend:

- React: For building user interfaces.
- CSS: For styling user interfaces.

## Setup and Run Instructions

These instructions follow Windows Command Prompt syntax. Alter syntax for your machine wherever necessary.

#### Prerequisites

Ensure you have the following installed on your machine.

- Python (version 3.8 or higher)
- Node.js (version 14 or higher)
- Git
- Pip

#### Clone Locally

First, clone the repository to your machine and navigate to it.

```
git clone https://github.com/AnnaBrunkhorst/apartment-app.git
cd apartment-app
```

#### Backend Setup

Now, navigate to the backend directory.

```
cd backend
```

Install dependencies.

```
pip install django djangorestframework
```

And start the backend server.

```
python manage.py migrate
python manage.py runserver
```

If desired, you can test functionality with commands like:

```
curl -X GET http://localhost:8000/api/apartments/
```

#### Frontend Setup

Open a new terminal tab/window.

Navigate to the frontend directory.

```
cd apartment-app\frontend
```

Install dependencies.

```
npm install
```

And start the React server.

```
npm start
```

This should automatically open the application in your web browser at http://localhost:3000/.

#### Using the Application

- Home Page: Displays a list of all apartments.
- Search: Type in the search bar to filter the apartment listings by name.
- Add Apartment: Click on the "Add New Apartment" button to add a new apartment.
- Edit Apartment: Click on the "Edit" button next to any apartment to modify its details.
- Delete Apartment: Click on the "Delete" button to remove an apartment from the list.