pipeline {
    agent any
    
    tools {
        nodejs 'node-latest' 
    }

    stages {
        stage('Install') {
            steps {
                echo 'Крок 1: Встановлення залежностей'
                bat 'npm install'
            }
        }

        stage('Testing') {
            steps {
                echo 'Виконання Тесту 1: Linting...'
                bat 'npm run lint'
                
                echo 'Виконання Тесту 2: Type Checking...'
                bat 'npx tsc --noEmit'
                
                echo 'Виконання Тесту 3: Build Test...'
                bat 'npm run build'
            }
        }
    }

    post {
        always {
            echo 'Формування звіту: Тестування завершено.'
        }
        success {
            echo 'РЕЗУЛЬТАТ: Позитивний. Проєкт готовий до роботи.'
        }
        failure {
            echo 'РЕЗУЛЬТАТ: Негативний. Знайдено помилки у коді або тестах.'
        }
    }
}