pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    environment {
        IMAGE_NAME = 'zoya9545/cloudbridge-app:v1'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cloudbridge-app:v1 .'
            }
        }

        stage('Tag Docker Image') {
            steps {
                sh 'docker tag cloudbridge-app:v1 $IMAGE_NAME'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $IMAGE_NAME
                    '''
                }
            }
        }
    }
}
