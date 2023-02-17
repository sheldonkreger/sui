(function() {var implementors = {
"sui_indexer":[["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/move_events/struct.table.html\" title=\"struct sui_indexer::schema::move_events::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/move_events/struct.table.html\" title=\"struct sui_indexer::schema::move_events::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/object_events/struct.table.html\" title=\"struct sui_indexer::schema::object_events::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/object_events/struct.NewObjectEvent.html\" title=\"struct sui_indexer::models::object_events::NewObjectEvent\">NewObjectEvent</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/object_logs/struct.table.html\" title=\"struct sui_indexer::schema::object_logs::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/object_logs/struct.table.html\" title=\"struct sui_indexer::schema::object_logs::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/checkpoint_logs/struct.table.html\" title=\"struct sui_indexer::schema::checkpoint_logs::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/checkpoint_logs/struct.table.html\" title=\"struct sui_indexer::schema::checkpoint_logs::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.NewObject.html\" title=\"struct sui_indexer::models::objects::NewObject\">NewObject</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/objects/struct.NewObject.html\" title=\"struct sui_indexer::models::objects::NewObject\">NewObject</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/error_logs/struct.table.html\" title=\"struct sui_indexer::schema::error_logs::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/error_logs/struct.NewErrorLog.html\" title=\"struct sui_indexer::models::error_logs::NewErrorLog\">NewErrorLog</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/transactions/struct.NewTransaction.html\" title=\"struct sui_indexer::models::transactions::NewTransaction\">NewTransaction</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/object_events/struct.table.html\" title=\"struct sui_indexer::schema::object_events::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/object_events/struct.table.html\" title=\"struct sui_indexer::schema::object_events::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/move_events/struct.table.html\" title=\"struct sui_indexer::schema::move_events::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/move_events/struct.NewMoveEvent.html\" title=\"struct sui_indexer::models::move_events::NewMoveEvent\">NewMoveEvent</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/publish_events/struct.table.html\" title=\"struct sui_indexer::schema::publish_events::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/publish_events/struct.NewPublishEvent.html\" title=\"struct sui_indexer::models::publish_events::NewPublishEvent\">NewPublishEvent</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/publish_event_logs/struct.table.html\" title=\"struct sui_indexer::schema::publish_event_logs::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/publish_event_logs/struct.table.html\" title=\"struct sui_indexer::schema::publish_event_logs::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/checkpoints/struct.NewCheckpoint.html\" title=\"struct sui_indexer::models::checkpoints::NewCheckpoint\">NewCheckpoint</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/error_logs/struct.table.html\" title=\"struct sui_indexer::schema::error_logs::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/error_logs/struct.table.html\" title=\"struct sui_indexer::schema::error_logs::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/object_events/struct.table.html\" title=\"struct sui_indexer::schema::object_events::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/object_events/struct.NewObjectEvent.html\" title=\"struct sui_indexer::models::object_events::NewObjectEvent\">NewObjectEvent</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/transaction_logs/struct.table.html\" title=\"struct sui_indexer::schema::transaction_logs::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/transaction_logs/struct.table.html\" title=\"struct sui_indexer::schema::transaction_logs::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/addresses/struct.NewAddress.html\" title=\"struct sui_indexer::models::addresses::NewAddress\">NewAddress</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/packages/struct.NewPackage.html\" title=\"struct sui_indexer::models::packages::NewPackage\">NewPackage</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/packages/struct.NewPackage.html\" title=\"struct sui_indexer::models::packages::NewPackage\">NewPackage</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/address_logs/struct.table.html\" title=\"struct sui_indexer::schema::address_logs::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/address_logs/struct.table.html\" title=\"struct sui_indexer::schema::address_logs::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/error_logs/struct.table.html\" title=\"struct sui_indexer::schema::error_logs::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/error_logs/struct.NewErrorLog.html\" title=\"struct sui_indexer::models::error_logs::NewErrorLog\">NewErrorLog</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/transaction_logs/struct.table.html\" title=\"struct sui_indexer::schema::transaction_logs::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/transaction_logs/struct.table.html\" title=\"struct sui_indexer::schema::transaction_logs::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/move_events/struct.table.html\" title=\"struct sui_indexer::schema::move_events::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/move_events/struct.table.html\" title=\"struct sui_indexer::schema::move_events::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/transactions/struct.NewTransaction.html\" title=\"struct sui_indexer::models::transactions::NewTransaction\">NewTransaction</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/events/struct.NewEvent.html\" title=\"struct sui_indexer::models::events::NewEvent\">NewEvent</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/publish_events/struct.table.html\" title=\"struct sui_indexer::schema::publish_events::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/publish_events/struct.table.html\" title=\"struct sui_indexer::schema::publish_events::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/move_events/struct.table.html\" title=\"struct sui_indexer::schema::move_events::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/move_events/struct.NewMoveEvent.html\" title=\"struct sui_indexer::models::move_events::NewMoveEvent\">NewMoveEvent</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/error_logs/struct.table.html\" title=\"struct sui_indexer::schema::error_logs::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/error_logs/struct.table.html\" title=\"struct sui_indexer::schema::error_logs::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/object_event_logs/struct.table.html\" title=\"struct sui_indexer::schema::object_event_logs::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/object_event_logs/struct.table.html\" title=\"struct sui_indexer::schema::object_event_logs::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/package_logs/struct.table.html\" title=\"struct sui_indexer::schema::package_logs::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/package_logs/struct.table.html\" title=\"struct sui_indexer::schema::package_logs::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/publish_event_logs/struct.table.html\" title=\"struct sui_indexer::schema::publish_event_logs::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/publish_event_logs/struct.table.html\" title=\"struct sui_indexer::schema::publish_event_logs::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/checkpoints/struct.NewCheckpoint.html\" title=\"struct sui_indexer::models::checkpoints::NewCheckpoint\">NewCheckpoint</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/package_logs/struct.table.html\" title=\"struct sui_indexer::schema::package_logs::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/package_logs/struct.table.html\" title=\"struct sui_indexer::schema::package_logs::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/object_event_logs/struct.table.html\" title=\"struct sui_indexer::schema::object_event_logs::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/object_event_logs/struct.table.html\" title=\"struct sui_indexer::schema::object_event_logs::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/object_events/struct.table.html\" title=\"struct sui_indexer::schema::object_events::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/object_events/struct.table.html\" title=\"struct sui_indexer::schema::object_events::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/addresses/struct.NewAddress.html\" title=\"struct sui_indexer::models::addresses::NewAddress\">NewAddress</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/publish_events/struct.table.html\" title=\"struct sui_indexer::schema::publish_events::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/publish_events/struct.NewPublishEvent.html\" title=\"struct sui_indexer::models::publish_events::NewPublishEvent\">NewPublishEvent</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/move_event_logs/struct.table.html\" title=\"struct sui_indexer::schema::move_event_logs::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/move_event_logs/struct.table.html\" title=\"struct sui_indexer::schema::move_event_logs::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/publish_events/struct.table.html\" title=\"struct sui_indexer::schema::publish_events::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/publish_events/struct.table.html\" title=\"struct sui_indexer::schema::publish_events::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/object_logs/struct.table.html\" title=\"struct sui_indexer::schema::object_logs::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/object_logs/struct.table.html\" title=\"struct sui_indexer::schema::object_logs::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/events/struct.NewEvent.html\" title=\"struct sui_indexer::models::events::NewEvent\">NewEvent</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/address_logs/struct.table.html\" title=\"struct sui_indexer::schema::address_logs::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/address_logs/struct.table.html\" title=\"struct sui_indexer::schema::address_logs::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/move_event_logs/struct.table.html\" title=\"struct sui_indexer::schema::move_event_logs::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/move_event_logs/struct.table.html\" title=\"struct sui_indexer::schema::move_event_logs::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/checkpoint_logs/struct.table.html\" title=\"struct sui_indexer::schema::checkpoint_logs::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/checkpoint_logs/struct.table.html\" title=\"struct sui_indexer::schema::checkpoint_logs::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a>: Insertable&lt;T&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()