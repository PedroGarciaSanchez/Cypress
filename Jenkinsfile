pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                bat '''npm i'''
                // sh 'npm i'
            }
        }
        //stage('Build') {
        //    steps {
                //sh 'npm run build'
        //        bat '''npm run build'''
        //    }
        //}
        stage('e2e Tests') {
            steps {
                //sh 'npm run cypress:ci'
                //sh 'npx cypress run --spec "cypress/e2e/*"'
                //bat '''npx cypress run --spec "cypress/e2e/*"'''
                bat '''npx cypress run --spec "cypress/e2e/*" --config videoRecording=false'''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
