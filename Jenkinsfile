kpipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t zoya9545/cloudbridge-app:v2 .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push zoya9545/cloudbridge-app:v2'
            }
        }

        stage('Deploy with Helm') {
            steps {
                sh 'helm upgrade --install cloudbridge ./cloudbridge-chart'
            }
        }
    }
}
