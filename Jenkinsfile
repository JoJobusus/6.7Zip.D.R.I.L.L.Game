pipeline {
    agent any
    tools { nodejs 'NodeJS' }
    stages {
        stage('Install') {
            steps { bat 'npm install' }
        }
        stage('Build') {
            steps { bat 'npm run build' }
        }
    }
}