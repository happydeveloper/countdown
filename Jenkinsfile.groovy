pipeline {
  agent any
  stages {
      stage('Build') {
          steps {
              //
          }
      }
      stage('Test') {
          steps {
              //
          }
      }
      stage('Deploy') {
          steps {
              //
          }
      }
  }
  post {
    always {
      echo 'bra bra'
    }
    failure {
      echo 'fail!'
    }
  }
}
