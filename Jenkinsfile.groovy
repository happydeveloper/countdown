pipeline {
  agent any
  stages {
      stage('Build') {
          steps {
              echo 'Build'
              npm install
          }
      }
      stage('Test') {
          steps {
              echo 'Test'
          }
      }
      stage('Deploy') {
          steps {
              echo 'Delply'
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
// node 키워드로 파이프라인을 정의하면, script {} 없이 if-else와 같은 스크립트 작성 가능
node {
  stage('Example') {
      if (env.BRANCH_NAME == 'master') {
          echo 'I only execute on the master branch'
      } else {
          echo 'I execute elsewhere'
      }
  }
}
