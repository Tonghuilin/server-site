pipeline {
    agent {
        docker {
            image 'node:8.11.4-slim'
            args '-u root'
        }
    }

    stages {
        stage('Setup') {
            steps {
                checkout scm
                sh 'node -v'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
