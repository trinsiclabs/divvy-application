<?php

use SilverStripe\Dev\FunctionalTest;
use TrinsicLabs\App\Models\TodoModel;

class ApiV1ControllerTodoExtensionTest extends FunctionalTest
{
    protected static $fixture_file = [
        'app/tests/fixtures/security.yml',
        'app/tests/fixtures/todos.yml',
        'app/tests/fixtures/accounts.yml',
    ];

    protected function getRequestData()
    {
        return [
            'Name' => 'Do the thing',
        ];
    }

    public function testFetchAllTodos()
    {
        $member = $this->objFromFixture('SilverStripe\Security\Member', 'JamesHalliday');
        $this->logInAs($member);

        $allTodosCount = TodoModel::get()->count();
        $accountTodoIds = TodoModel::get()->filter(['AccountID' => $member->AccountID])->column('ID');
        $response = $this->get('/api/v1/todo');
        $body = json_decode($response->getBody(), true);

        $this->assertLessThan($allTodosCount, count($body['items']));
        $this->assertEquals(count($accountTodoIds), count($body['items']));

        foreach ($body['items'] as $item) {
            $this->assertTrue(in_array($item['id'], $accountTodoIds));
        }
    }

    public function testFetchOneTodo()
    {
        $member = $this->objFromFixture('SilverStripe\Security\Member', 'JamesHalliday');
        $this->logInAs($member);

        // Should get a single Todo associated with the users account.
        $todo = $this->objFromFixture('TrinsicLabs\App\Models\TodoModel', 'TurnItOff');
        $response = $this->get('/api/v1/todo/' . $todo->ID);
        $body = json_decode($response->getBody(), true);
        $this->assertEquals(1, count($body['items']));
        $this->assertEquals($todo->Name, $body['items'][0]['name']);

        // Should 404 if the Todo isn't associated with the users account.
        $todo = $this->objFromFixture('TrinsicLabs\App\Models\TodoModel', 'StayShady');
        $response = $this->get('/api/v1/todo/' . $todo->ID);
        $this->assertEquals(404, $response->getStatusCode());

        // Should 404 when the id doesn't exist.
        $response = $this->get('/api/v1/todo/9999');
        $this->assertEquals(404, $response->getStatusCode());
    }

    public function testCreateTodo()
    {
        $member = $this->objFromFixture('SilverStripe\Security\Member', 'JamesHalliday');
        $this->logInAs($member);

        // Should return a validation error when required fields are missing.
        $data = $this->getRequestData();
        $data['Name'] = '';
        $response = $this->post('/api/v1/todo', $data);
        $this->assertEquals(400, $response->getStatusCode());

        // Should create a Todo and associate it with the users account.
        $initialTodoCount = TodoModel::get()->filter('AccountID', $member->AccountID)->count();
        $nextTodoCount = $initialTodoCount + 1;
        $response = $this->post('/api/v1/todo', $this->getRequestData());
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertEquals($nextTodoCount, TodoModel::get()->filter('AccountID', $member->AccountID)->count());
    }

    public function testUpdateTodo()
    {
        $member = $this->objFromFixture('SilverStripe\Security\Member', 'JamesHalliday');
        $this->logInAs($member);

        // Should return a validation error when required fields are missing.
        $data = $this->getRequestData();
        $data['Name'] = '';
        $response = $this->post('/api/v1/todo/1', $data);
        $this->assertEquals(400, $response->getStatusCode());

        // Should 404 when the Todo isn't associated with the users account.
        $todo = $this->objFromFixture('TrinsicLabs\App\Models\TodoModel', 'StayShady');
        $data = $this->getRequestData();
        $response = $this->post('/api/v1/todo/' . $todo->ID, $data);
        $this->assertEquals(404, $response->getStatusCode());

        // Should 404 when the Todo does not exist.
        $response = $this->post('/api/v1/todo/9999', $this->getRequestData());
        $this->assertEquals(404, $response->getStatusCode());

        // Should update a Todo associated with the users account.
        $todo = $this->objFromFixture('TrinsicLabs\App\Models\TodoModel', 'TurnItOff');
        $data = $this->getRequestData();
        $this->assertFalse($todo->Name === $data['Name']);
        $response = $this->post('/api/v1/todo/' . $todo->ID, $data);
        $this->assertEquals(200, $response->getStatusCode());
        $todo = TodoModel::get()->byId($todo->ID);
        $this->assertTrue($todo->Name === $data['Name']);
    }
}
