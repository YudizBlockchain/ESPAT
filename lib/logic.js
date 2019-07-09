/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction processor function.
 * @param {org.example.ecommerce.purchase} tx The sample transaction instance.
 * @transaction
 */
async function purchase(tx) {  // eslint-disable-line no-unused-vars

    // Save the old value of the asset.
  //  const oldValue = tx.img.price;
	const newvalue = tx.newPrice;
    // Update the asset with the new value.
    tx.imgid.price = newvalue;
	tx.imgid.owner = tx.newOwner;
    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.ecommerce.img');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.imgid);
}

/**
 * Sample transaction processor function.
 * @param {org.example.ecommerce.Signup_vendor} tx2 The sample transaction instance.
 * @transaction
 */
async function Signup_vendor(tx2) {  // eslint-disable-line no-unused-vars
	const particiantRegistry = await getParticipantRegistry('org.example.ecommerce.vendor');
    var factory = getFactory();
    var Email = tx2.Email;

    var vendorAsset = factory.newResource('org.example.ecommerce', 'vendor', Email)

    vendorAsset.vendorId = tx2.vendorId;
    vendorAsset.firstName = tx2.firstName;
	vendorAsset.lastName = tx2.lastName;
    await particiantRegistry.add(vendorAsset)
    
}

/**
 * Sample transaction processor function.
 * @param {org.example.ecommerce.Signup_user} tx3 The sample transaction instance.
 * @transaction
 */
async function Signup_user(tx3) {  // eslint-disable-line no-unused-vars
	const particiantRegistry = await getParticipantRegistry('org.example.ecommerce.user');
    var factory = getFactory();
    var Email = tx3.Email;

    var userAsset = factory.newResource('org.example.ecommerce', 'user', Email)

    userAsset.userId = tx3.userId;
    userAsset.firstName = tx3.firstName;
	userAsset.lastName = tx3.lastName;
    await particiantRegistry.add(userAsset)
}