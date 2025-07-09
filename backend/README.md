# Flask Backend

## Overview
A simple Flask application that accepts form data and returns emotion analysis results.

## Installation
Install the required dependencies:
```bash
pip install flask
```

## API Endpoints

### POST /
- **Description**: Accepts form data and returns emotion analysis
- **Input**: Form data with `data` key
- **Output**: JSON response containing:
    - Random emotion from predefined emotion list
    - Random confidence score (0-1 range)

## Running the Application
Start the Flask development server:
```bash
flask run
```

The server will be available at `http://localhost:5000`